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
            from: "Reframe <noreply@updates.enactus-reframe.org>",
            to: [email],
            subject: "Please confirm your application",
            html: `
        <p>Hi ${firstName},</p>
        <p>Thanks for your application for reading glasses. Please confirm your email by clicking the button below:</p>
        <p><a href="${BASE_URL}/.netlify/functions/confirm-application?token=${confirm_token}">
        <p>If you did not apply, you can ignore this email.</p>
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
