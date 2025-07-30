import { Handler } from '@netlify/functions';
import { neon } from '@netlify/neon';

const sql = neon();

const handler: Handler = async (event) => {
    const token = event.queryStringParameters?.token;

    if (!token) {
        return {
            statusCode: 400,
            headers: { 'Content-Type': 'text/html' },
            body: renderHTML('Fehlerhafte Anfrage', 'Kein Token übergeben.'),
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
            return {
                statusCode: 404,
                headers: { 'Content-Type': 'text/html' },
                body: renderHTML('Token ungültig', 'Der Bestätigungslink ist ungültig oder abgelaufen.'),
            };
        }

        const email = result[0].email;

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'text/html' },
            body: renderHTML('🎉 Anmeldung bestätigt', `Vielen Dank! Deine E-Mail <strong>${email}</strong> wurde erfolgreich für unseren Newsletter registriert.`),
        };
    } catch (err) {
        console.error("Confirmation error:", err);
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'text/html' },
            body: renderHTML('Serverfehler', 'Etwas ist schiefgelaufen. Bitte versuche es später erneut.'),
        };
    }
};

function renderHTML(title: string, message: string): string {
    return `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${title}</title>
      <style>
        body {
          font-family: system-ui, sans-serif;
          background-color: #fff7ed;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          margin: 0;
          color: #333;
        }
        .container {
          background: white;
          padding: 2rem 3rem;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.05);
          max-width: 500px;
          text-align: center;
        }
        h1 {
          color: #d97706;
        }
        p {
          margin-top: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>${title}</h1>
        <p>${message}</p>
      </div>
    </body>
    </html>
  `;
}

export { handler };
