import { Handler } from "@netlify/functions";
import { neon } from "@netlify/neon";
import { Resend } from "resend";

const sql = neon();
const resend = new Resend(process.env.RESEND_API_KEY_APLLICATION);
const BASE_URL = process.env.CONFIRM_BASE_URL!;

const handler: Handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            location,
            visionDescription,
            comments,
            acceptedTerms,
        } = JSON.parse(event.body || "{}");

        if (!firstName || !lastName || !email || !location || !acceptedTerms) {
            return { statusCode: 400, body: JSON.stringify({ error: "Missing required fields." }) };
        }

        const confirm_token = crypto.randomUUID();

        await sql`
      INSERT INTO glasses_applications (
        first_name, last_name, email, phone, location,
        vision_description, comments, accepted_terms, confirm_token
      ) VALUES (
        ${firstName}, ${lastName}, ${email}, ${phone}, ${location},
        ${visionDescription}, ${comments}, ${acceptedTerms}, ${confirm_token}
      )
    `;

        await resend.emails.send({
            from: "Reframe <newsletter@updates.enactus-reframe.org>",
            to: [email],
            subject: "Please confirm your application for reading glasses",
            html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #333;">
      <h2>Hi ${firstName},</h2>
      <p>Thank you for applying to receive affordable reading glasses through our Reframe project.</p>
      <p>To complete your application, please confirm your email address by clicking the button below:</p>
      <p style="margin: 30px 0;">
        <a href="${BASE_URL}/.netlify/functions/confirm-application?token=${confirm_token}"
           style="display: inline-block; padding: 12px 20px; background-color: #f59e0b; color: white; text-decoration: none; border-radius: 6px;">
          Confirm my email
        </a>
      </p>
      <p>If you did not submit this application, you can safely ignore this message.</p>
      <p>Warm regards,<br/>The Reframe Team</p>
    </div>
  `,
        });


        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Application submitted. Please confirm via email." }),
        };
    } catch (err) {
        console.error("Application error:", err);
        return { statusCode: 500, body: JSON.stringify({ error: "Internal server error" }) };
    }
};

export { handler };
