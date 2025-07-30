import { Handler } from '@netlify/functions';
import { neon } from '@netlify/neon';
import { Resend } from 'resend';
import { randomUUID } from 'crypto';

const sql = neon();
const resend = new Resend(process.env.RESEND_API_KEY);

const handler: Handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    const { email } = JSON.parse(event.body || '{}');

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return { statusCode: 400, body: 'Invalid email address' };
    }

    const token = randomUUID();
    const baseUrl = process.env.CONFIRM_BASE_URL || "http://localhost:8888";

    try {
        // Speichern oder aktualisieren
        await sql`
      INSERT INTO newsletter_subscribers (email, confirm_token)
      VALUES (${email}, ${token})
      ON CONFLICT (email) DO UPDATE SET confirm_token = ${token}, is_confirmed = FALSE
    `;

        // Mail versenden
        await resend.emails.send({
            from: 'Reframe Newsletter <newsletter@updates.enactus-reframe.org>',
            to: [email],
            subject: 'Please confirm your subscription',
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>Welcome to Reframe 👓</h2>
          <p>Thank you for signing up for our newsletter!</p>
          <p>To confirm your subscription, please click the button below:</p>
          <p>
            <a href="${baseUrl}/.netlify/functions/confirm?token=${token}" 
               style="display: inline-block; padding: 10px 20px; background-color: #f59e0b; color: white; text-decoration: none; border-radius: 4px;">
              Confirm Subscription
            </a>
          </p>
          <p>If you didn't request this, you can ignore this email.</p>
          <p>Best regards,<br />The Reframe Team</p>
        </div>
      `,
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Confirmation email sent.' }),
        };
    } catch (err) {
        console.error("Subscribe error:", err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal server error' }),
        };
    }
};

export { handler };
