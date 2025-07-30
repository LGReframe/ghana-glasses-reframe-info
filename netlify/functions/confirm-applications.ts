import { Handler } from "@netlify/functions";
import { neon } from "@netlify/neon";

const sql = neon();

const handler: Handler = async (event) => {
    const token = event.queryStringParameters?.token;
    if (!token) return { statusCode: 400, body: "Missing token" };

    try {
        const result = await sql`
      UPDATE glasses_applications
      SET is_confirmed = TRUE
      WHERE confirm_token = ${token}
      RETURNING first_name, email
    `;

        if (result.length === 0) {
            return {
                statusCode: 404,
                body: `<h2 style="color:red">Invalid or expired confirmation link.</h2>`,
                headers: { "Content-Type": "text/html" },
            };
        }

        const { first_name, email } = result[0];

        return {
            statusCode: 200,
            headers: { "Content-Type": "text/html" },
            body: `
        <div style="text-align:center;padding:3rem;">
          <h2 style="color:green;">Thank you, ${first_name}!</h2>
          <p>Your application for reading glasses has been confirmed.</p>
          <p>We will contact you soon at <strong>${email}</strong>.</p>
        </div>
      `,
        };
    } catch (err) {
        console.error("Confirmation error:", err);
        return { statusCode: 500, body: "Internal server error" };
    }
};

export { handler };
