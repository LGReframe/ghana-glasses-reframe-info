import { Handler } from '@netlify/functions';
import { neon } from '@netlify/neon';

const sql = neon();

const handler: Handler = async (event) => {
    const token = event.queryStringParameters?.token;

    if (!token) {
        return {
            statusCode: 400,
            body: 'Missing token',
        };
    }

    try {
        const result = await sql`
      UPDATE newsletter_subscribers
      SET is_confirmed = TRUE
      WHERE confirm_token = ${token}
      RETURNING email
    `;

        if (result.length === 0) {
            return { statusCode: 404, body: 'Invalid or expired token' };
        }

        return {
            statusCode: 200,
            body: `Thank you! Your subscription is now confirmed for: ${result[0].email}`,
        };
    } catch (err) {
        console.error("Confirmation error:", err);
        return {
            statusCode: 500,
            body: 'Internal server error',
        };
    }
};

export { handler };
