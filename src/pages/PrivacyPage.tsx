import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react"; // Import useState





// --- Content Object ---
// All text content is now stored here, separate from the JSX structure.
const content = {
  de: {
    title: "Datenschutzerklärung (Privacy Policy)",
    lastUpdated: "Stand: November 2025",
    toggleButton: "Switch to English",
    intro:
        "Wir, der Enactus Lüneburg e. V., nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen der Datenschutz-Grundverordnung (DSGVO).",
    responsible: {
      title: "1. Name und Kontaktdaten des Verantwortlichen",
      controller: "Verantwortlicher für die Datenverarbeitung:",
      address: [
        "Enactus Lüneburg e. V.",
        "Universitätsallee 1",
        "21335 Lüneburg",
        "Deutschland",
        "E-Mail: team@reframe.org (Allgemeine Anfragen)",
      ],
      contact: "Ansprechpartner für Datenschutzfragen:",
      contactPerson: [
        "Max Dannenbaum",
        "E-Mail: max.dannenbaum@lueneburg.enactus.team",
      ],
    },
    hosting: {
      title: "2. Verarbeitung von Zugriffsdaten (Hosting)",
      intro:
          "Um unsere Website technisch bereitzustellen und deren Sicherheit zu gewährleisten, nutzen wir den Hosting-Dienst von Netlify.",
      table: {
        th1: "Kategorie",
        th2: "Zweck der Verarbeitung",
        th3: "Rechtsgrundlage",
        th4: "Speicherdauer",
        td1: "<strong>Server-Logfiles</strong> (IP-Adresse, Zeitpunkt, aufgerufene Seite)",
        td2: "Gewährleistung der Stabilität und Sicherheit des Betriebs unserer Website.",
        td3: "<strong>Berechtigtes Interesse</strong> (Art. 6 Abs. 1 lit. f DSGVO)",
        td4: "Logs werden online <strong>90 Tage</strong> und offline maximal <strong>1 Jahr</strong> aufbewahrt.",
      },
      note: {
        title: "Hinweis zum Auftragsverarbeiter Netlify:",
        li1: "Netlify, Inc. (USA) fungiert als unser Auftragsverarbeiter.",
        li2: "Es wurde ein <strong>Auftragsverarbeitungsvertrag (AVV)</strong> gemäß Art. 28 DSGVO abgeschlossen.",
        li3: "Da Netlify ein US-Unternehmen ist, findet ein <strong>Drittlandtransfer</strong> statt. Dieser basiert auf den <strong>Standardvertragsklauseln der EU-Kommission</strong>.",
      },
    },
    form: {
      title: "3. Datenverarbeitung durch das Anmeldeformular",
      intro:
          "Wir erfassen personenbezogene Daten über das Anmeldeformular, um Sie mit relevanten Informationen und Angeboten versorgen zu können.",
      subtitleA: "A. Erfasste Datenkategorien",
      tableA: {
        th1: "Pflichtfelder",
        th2: "Optionale Felder",
        td1_1: "Vorname, Nachname, E-Mail-Adresse",
        td1_2: "Telefonnummer, Konkrete Sehbedürfnisse",
        td2_1: "Region/Stadt in Ghana",
        td2_2: "Zusätzliche Kommentare",
      },
      subtitleB: "B. Zwecke und Rechtsgrundlage",
      tableB: {
        th1: "Zweck der Verarbeitung",
        th2: "Rechtsgrundlage",
        th3: "Speicherdauer (Löschkonzept)",
        td1_1:
            "<strong>Kontakt und Kommunikation</strong> zur Erreichung unserer Zielgruppe in Ghana.",
        td1_2: "<strong>Einwilligung</strong> (Art. 6 Abs. 1 lit. a DSGVO)",
        td1_3:
            "Die Daten werden gelöscht, sobald der Zweck entfällt (z. B. nach <strong>6 Monaten</strong> ohne erfolgreiche Kontaktaufnahme oder bei Widerspruch/Widerruf).",
        td2_1:
            "<strong>Versand von Angeboten</strong> (Brillenverkauf) oder Newslettern.",
        td2_2: "<strong>Einwilligung</strong> (Art. 6 Abs. 1 lit. a DSGVO)",
        td2_3: "Siehe oben.",
      },
      note: {
        title: "Hinweis zur Einwilligung:",
        p: "Die Einwilligung zur Speicherung und Verarbeitung erfolgt durch das <strong>aktive Anklicken der Checkbox</strong> und wird durch die <strong>Speicherung der IP-Adresse und des Zeitstempels</strong> protokolliert.",
      },
    },
    newsletter: {
      title: "4. Newsletter-Versand (E-Mail-Adressen)",
      intro:
          "Zum Versand unserer E-Mail-Newsletter und Angebote nutzen wir den Dienstleister Resend.",
      table: {
        th1: "Prozess",
        th2: "Rechtsgrundlage",
        th3: "Auftragsverarbeiter",
        td1_1: "<strong>Anmeldung</strong>",
        td1_2: "<strong>Einwilligung</strong> (Art. 6 Abs. 1 lit. a DSGVO)",
        td1_3: "Resend (Plus Five Five, Inc., USA)",
        td2_1: "<strong>Bestätigung</strong>",
        td2_2:
            "<strong>Double-Opt-in-Verfahren</strong> (DOI) zur rechtlichen Absicherung des Nachweises.",
        td2_3: "Resend",
      },
      note: {
        title: "Hinweis zum Auftragsverarbeiter Resend:",
        li1: "Resend (Plus Five Five, Inc., USA) fungiert als unser Auftragsverarbeiter.",
        li2: "Die Übermittlung in die USA ist zulässig, da sich Resend unter dem <strong>EU-U.S. Data Privacy Framework (DPF)</strong> zertifiziert hat und ein <strong>AVV</strong> abgeschlossen wurde.",
        li3: "Wir führen <strong>kein Tracking</strong> (keine Öffnungs- oder Klickratenmessung) durch.",
      },
      deletion: "Löschung bei Widerruf:",
      deletionText:
          "Ihre Daten werden nach Widerruf der Einwilligung (Abmeldung über den Link in der E-Mail) unverzüglich aus der aktiven Liste bei Resend entfernt und spätestens im Rahmen unserer monatlichen Bereinigung gelöscht.",
    },
    processors: {
      title: "5. Externe Datenverarbeitung (Gemeinsame Auftragsverarbeiter)",
      intro:
          "Wir setzen die folgenden externen Dienstleister ein, die personenbezogene Daten in unserem Auftrag verarbeiten. Mit allen Dienstleistern wurde ein <strong>Auftragsverarbeitungsvertrag (AVV)</strong> gemäß Art. 28 DSGVO geschlossen.",
      table: {
        th1: "Dienstleister",
        th2: "Zweck",
        th3: "Standort / Drittlandtransfer",
        td1_1: "<strong>Neon</strong>",
        td1_2: "Datenbank-Hosting und Speicherung der Anmeldedaten.",
        td1_3:
            "Serverstandort: <strong>Frankfurt, Deutschland (EU)</strong>.",
        td2_1: "<strong>Netlify</strong>",
        td2_2:
            "Website-Hosting und Bereitstellung der Server-Infrastruktur.",
        td2_3:
            "USA (Übermittlung auf Basis von <strong>Standardvertragsklauseln</strong>).",
        td3_1: "<strong>Resend</strong>",
        td3_2:
            "Versand und Verwaltung der E-Mail-Newsletter und Angebote.",
        td3_3:
            "USA (Übermittlung auf Basis des <strong>EU-U.S. Data Privacy Framework</strong>).",
      },
    },
    toms: {
      title:
          "6. Sicherheit (Technische und Organisatorische Maßnahmen - TOMs)",
      intro:
          "Wir setzen gemäß Art. 32 DSGVO geeignete technische und organisatorische Maßnahmen ein, um die Vertraulichkeit, Integrität und Verfügbarkeit Ihrer Daten zu gewährleisten:",
      li1: "<strong>Zugangskontrolle:</strong> Der Zugriff auf die Datenbank (Neon) und die E-Mail-Verwaltung (Resend) ist auf die <strong>Projektleitung</strong> beschränkt (Need-to-know-Prinzip).",
      li2: "<strong>Verschlüsselung:</strong> Alle Datenübertragungen zur und von der Website erfolgen über <strong>SSL/TLS-Verschlüsselung (HTTPS)</strong>. Die Verbindung zur Datenbank ist ebenfalls verschlüsselt.",
      li3: "<strong>Authentifizierung:</strong> Es wird eine <strong>Zwei-Faktor-Authentifizierung (2FA)</strong> für alle Administrationszugänge genutzt.",
      li4: "<strong>Gerätesicherheit:</strong> Die Laptops und Computer, die zum Zugriff auf die Systeme genutzt werden, sind <strong>passwortgeschützt</strong> und verfügen über eine <strong>Festplattenverschlüsselung</strong>.",
    },
    rights: {
      title: "7. Ihre Rechte als betroffene Person",
      intro: "Sie haben das Recht:",
      li1: "<strong>Auskunft</strong> (Art. 15 DSGVO): Sie können jederzeit Auskunft über die von uns verarbeiteten Daten verlangen.",
      li2: "<strong>Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.",
      li3: "<strong>Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.",
      li4: "<strong>Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO).",
      li5: "<strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format erhalten.",
      li6: "<strong>Widerruf der Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Sie haben jederzeit das Recht, Ihre Einwilligung zu widerrufen (z. B. durch Klick auf den Abmeldelink im Newsletter).",
      li7: "<strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer personenbezogenen Daten widersprechen.",
      outro:
          "Zur Ausübung dieser Rechte senden Sie bitte eine E-Mail an: <strong>max.dannenbaum@lueneburg.enactus.team</strong>",
    },
  },
  en: {
    title: "Privacy Policy (Datenschutzerklärung)",
    lastUpdated: "Last updated: November 2025",
    toggleButton: "Auf Deutsch wechseln",
    intro:
        "We, Enactus Lüneburg e. V., take the protection of your personal data very seriously. We process your data exclusively on the basis of the statutory provisions (General Data Protection Regulation - GDPR).",
    responsible: {
      title: "1. Name and Contact Details of the Controller",
      controller: "Controller for data processing:",
      address: [
        "Enactus Lüneburg e. V.",
        "Universitätsallee 1",
        "21335 Lüneburg",
        "Germany",
        "E-Mail: team@reframe.org (General inquiries)",
      ],
      contact: "Contact person for data protection inquiries:",
      contactPerson: [
        "Max Dannenbaum",
        "E-Mail: max.dannenbaum@lueneburg.enactus.team",
      ],
    },
    hosting: {
      title: "2. Processing of Access Data (Hosting)",
      intro:
          "To technically provide our website and ensure its security, we use the hosting service from Netlify.",
      table: {
        th1: "Category",
        th2: "Purpose of processing",
        th3: "Legal basis",
        th4: "Retention period",
        td1: "<strong>Server log files</strong> (IP address, timestamp, page accessed)",
        td2: "Ensuring the stability and security of our website's operation.",
        td3: "<strong>Legitimate Interest</strong> (Art. 6(1)(f) GDPR)",
        td4: "Logs are stored online for <strong>90 days</strong> and offline for a maximum of <strong>1 year</strong>.",
      },
      note: {
        title: "Note on the data processor Netlify:",
        li1: "Netlify, Inc. (USA) acts as our data processor.",
        li2: "A <strong>Data Processing Agreement (DPA)</strong> in accordance with Art. 28 GDPR has been concluded.",
        li3: "As Netlify is a US company, a <strong>third-country transfer</strong> takes place. This is based on the <strong>EU Commission's Standard Contractual Clauses (SCCs)</strong>.",
      },
    },
    form: {
      title: "3. Data Processing via the Application Form",
      intro:
          "We collect personal data via the application form to provide you with relevant information and offers.",
      subtitleA: "A. Data Categories Collected",
      tableA: {
        th1: "Required fields",
        th2: "Optional fields",
        td1_1: "First name, Last name, E-mail address",
        td1_2: "Phone number, Specific vision needs",
        td2_1: "Region/City in Ghana",
        td2_2: "Additional comments",
      },
      subtitleB: "B. Purposes and Legal Basis",
      tableB: {
        th1: "Purpose of processing",
        th2: "Legal basis",
        th3: "Retention Period (Deletion Concept)",
        td1_1:
            "<strong>Contact and communication</strong> to reach our target audience in Ghana.",
        td1_2: "<strong>Consent</strong> (Art. 6(1)(a) GDPR)",
        td1_3:
            "Data is deleted as soon as the purpose no longer applies (e.g., after <strong>6 months</strong> without successful contact or upon objection/revocation).",
        td2_1:
            "<strong>Sending offers</strong> (glasses sales) or newsletters.",
        td2_2: "<strong>Consent</strong> (Art. 6(1)(a) GDPR)",
        td2_3: "See above.",
      },
      note: {
        title: "Note on Consent:",
        p: "Consent for storage and processing is given by <strong>actively clicking the checkbox</strong> and is logged by <strong>storing the IP address and timestamp</strong>.",
      },
    },
    newsletter: {
      title: "4. Newsletter Dispatch (E-mail Addresses)",
      intro:
          "We use the service provider Resend to send our e-mail newsletters and offers.",
      table: {
        th1: "Process",
        th2: "Legal basis",
        th3: "Data Processor",
        td1_1: "<strong>Subscription</strong>",
        td1_2: "<strong>Consent</strong> (Art. 6(1)(a) GDPR)",
        td1_3: "Resend (Plus Five Five, Inc., USA)",
        td2_1: "<strong>Confirmation</strong>",
        td2_2:
            "<strong>Double-Opt-In procedure</strong> (DOI) for legal verification of proof.",
        td2_3: "Resend",
      },
      note: {
        title: "Note on the data processor Resend:",
        li1: "Resend (Plus Five Five, Inc., USA) acts as our data processor.",
        li2: "The transfer to the USA is permissible as Resend is certified under the <strong>EU-U.S. Data Privacy Framework (DPF)</strong> and a <strong>DPA</strong> has been concluded.",
        li3: "We do <strong>not</strong> conduct <strong>tracking</strong> (no open or click-rate tracking).",
      },
      deletion: "Deletion upon Revocation:",
      deletionText:
          "Your data will be immediately removed from the active list at Resend upon revocation of your consent (unsubscribing via the link in the e-mail) and will be deleted at the latest during our monthly cleanup.",
    },
    processors: {
      title: "5. External Data Processing (Joint Data Processors)",
      intro:
          "We use the following external service providers who process personal data on our behalf. A <strong>Data Processing Agreement (DPA)</strong> in accordance with Art. 28 GDPR has been concluded with all service providers.",
      table: {
        th1: "Service Provider",
        th2: "Purpose",
        th3: "Location / Third-Country Transfer",
        td1_1: "<strong>Neon</strong>",
        td1_2: "Database hosting and storage of application data.",
        td1_3:
            "Server location: <strong>Frankfurt, Germany (EU)</strong>.",
        td2_1: "<strong>Netlify</strong>",
        td2_2: "Website hosting and provision of server infrastructure.",
        td2_3:
            "USA (Transfer based on <strong>Standard Contractual Clauses</strong>).",
        td3_1: "<strong>Resend</strong>",
        td3_2: "Dispatch and management of e-mail newsletters and offers.",
        td3_3:
            "USA (Transfer based on the <strong>EU-U.S. Data Privacy Framework</strong>).",
      },
    },
    toms: {
      title:
          "6. Security (Technical and Organizational Measures - TOMs)",
      intro:
          "In accordance with Art. 32 GDPR, we use suitable technical and organizational measures to ensure the confidentiality, integrity, and availability of your data:",
      li1: "<strong>Access Control:</strong> Access to the database (Neon) and e-mail management (Resend) is restricted to the <strong>project management</strong> (need-to-know-principle).",
      li2: "<strong>Encryption:</strong> All data transfers to and from the website are carried out using <strong>SSL/TLS encryption (HTTPS)</strong>. The connection to the database is also encrypted.",
      li3: "<strong>Authentication:</strong> <strong>Two-factor authentication (2FA)</strong> is used for all administrative access.",
      li4: "<strong>Device Security:</strong> The laptops and computers used to access the systems are <strong>password-protected</strong> and have <strong>hard drive encryption</strong>.",
    },
    rights: {
      title: "7. Your Rights as a Data Subject",
      intro: "You have the right:",
      li1: "<strong>Access</strong> (Art. 15 GDPR): You can request information about the data we process about you at any time.",
      li2: "<strong>Rectification</strong> (Art. 16 GDPR): You can request the correction of inaccurate data.",
      li3: "<strong>Erasure</strong> (Art. 17 GDPR): You can request the deletion of your data, provided no legal retention obligations exist.",
      li4: "<strong>Restriction of Processing</strong> (Art. 18 GDPR).",
      li5: "<strong>Data Portability</strong> (Art. 20 GDPR): You can receive your data in a structured, common, and machine-readable format.",
      li6: "<strong>Withdraw Consent</strong> (Art. 7(3) GDPR): You have the right to withdraw your consent at any time with future effect (e.g., by clicking the unsubscribe link in the newsletter).",
      li7: "<strong>Object</strong> (Art. 21 GDPR): You can object to the processing of your personal data.",
      outro:
          "To exercise these rights, please send an e-mail to: <strong>max.dannenbaum@lueneburg.enactus.team</strong>",
    },
  },
};

// --- Helper Components (unchanged) ---

const Note = ({ children }) => (
    <blockquote className="mt-4 p-4 border-l-4 border-green-500 bg-green-50">
      {children}
    </blockquote>
);

const PrivacyTable = ({ children }) => (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
        {children}
      </table>
    </div>
);

const Th = ({ children, ...props }) => (
    <th
        className="px-4 py-3 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
        {...props}
    >
      {children}
    </th>
);

const Td = ({ children, isStrong = false, ...props }) => (
    <td
        className={`px-4 py-3 text-sm ${isStrong ? "font-semibold" : ""}`}
        {...props}
    />
);

// --- Page Component (Updated) ---

const PrivacyPage = () => {
  const [language, setLanguage] = useState("de"); // 'de' or 'en'
  const t = content[language]; // Get content for the selected language

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "de" ? "en" : "de"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
        <Navigation />
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1
                  className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
                  dangerouslySetInnerHTML={{ __html: t.title }}
              />
              <p
                  className="text-lg text-gray-600"
                  dangerouslySetInnerHTML={{ __html: t.lastUpdated }}
              />

              {/* --- Language Toggle Button --- */}
              <button
                  onClick={toggleLanguage}
                  className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors"
              >
                {t.toggleButton}
              </button>
            </div>

            <div className="bg-white border border-green-100 rounded-xl p-8 md:p-12 shadow-lg space-y-8 text-gray-700">
              <p dangerouslySetInnerHTML={{ __html: t.intro }} />

              {/* 1. Verantwortlicher */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.responsible.title }}
                />
                <p>
                  <strong
                      dangerouslySetInnerHTML={{
                        __html: t.responsible.controller,
                      }}
                  />
                </p>
                <p
                    className="mt-2"
                    dangerouslySetInnerHTML={{
                      __html: t.responsible.address.join("<br />"),
                    }}
                />
                <p className="mt-4">
                  <strong
                      dangerouslySetInnerHTML={{ __html: t.responsible.contact }}
                  />
                  <br />
                  <span
                      dangerouslySetInnerHTML={{
                        __html: t.responsible.contactPerson.join("<br />"),
                      }}
                  />
                </p>
              </div>

              {/* 2. Verarbeitung von Zugriffsdaten (Hosting) */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.hosting.title }}
                />
                <p dangerouslySetInnerHTML={{ __html: t.hosting.intro }} />
                <PrivacyTable>
                  <thead className="bg-gray-50">
                  <tr>
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.th1 }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.th2 }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.th3 }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.th4 }}
                    />
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.td1 }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.td2 }}
                    />
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.td3 }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.hosting.table.td4 }}
                    />
                  </tr>
                  </tbody>
                </PrivacyTable>
                <Note>
                  <h4
                      className="font-semibold text-gray-800"
                      dangerouslySetInnerHTML={{ __html: t.hosting.note.title }}
                  />
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li
                        dangerouslySetInnerHTML={{ __html: t.hosting.note.li1 }}
                    />
                    <li
                        dangerouslySetInnerHTML={{ __html: t.hosting.note.li2 }}
                    />
                    <li
                        dangerouslySetInnerHTML={{ __html: t.hosting.note.li3 }}
                    />
                  </ul>
                </Note>
              </div>

              {/* 3. Datenverarbeitung durch das Anmeldeformular */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.form.title }}
                />
                <p dangerouslySetInnerHTML={{ __html: t.form.intro }} />

                <h3
                    className="text-xl font-semibold text-gray-800 mb-3 mt-6"
                    dangerouslySetInnerHTML={{ __html: t.form.subtitleA }}
                />
                <PrivacyTable>
                  <thead className="bg-gray-50">
                  <tr>
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.form.tableA.th1 }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.form.tableA.th2 }}
                    />
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableA.td1_1 }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableA.td1_2 }}
                    />
                  </tr>
                  <tr>
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableA.td2_1 }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableA.td2_2 }}
                    />
                  </tr>
                  </tbody>
                </PrivacyTable>

                <h3
                    className="text-xl font-semibold text-gray-800 mb-3 mt-6"
                    dangerouslySetInnerHTML={{ __html: t.form.subtitleB }}
                />
                <PrivacyTable>
                  <thead className="bg-gray-50">
                  <tr>
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.th1 }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.th2 }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.th3 }}
                    />
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.td1_1 }}
                    />
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.td1_2 }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.td1_3 }}
                    />
                  </tr>
                  <tr>
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.td2_1 }}
                    />
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.td2_2 }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{ __html: t.form.tableB.td2_3 }}
                    />
                  </tr>
                  </tbody>
                </PrivacyTable>
                <Note>
                  <h4
                      className="font-semibold text-gray-800"
                      dangerouslySetInnerHTML={{ __html: t.form.note.title }}
                  />
                  <p
                      className="mt-1"
                      dangerouslySetInnerHTML={{ __html: t.form.note.p }}
                  />
                </Note>
              </div>

              {/* 4. Newsletter-Versand */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.newsletter.title }}
                />
                <p dangerouslySetInnerHTML={{ __html: t.newsletter.intro }} />
                <PrivacyTable>
                  <thead className="bg-gray-50">
                  <tr>
                    <Th
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.th1,
                        }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.th2,
                        }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.th3,
                        }}
                    />
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.td1_1,
                        }}
                    />
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.td1_2,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.td1_3,
                        }}
                    />
                  </tr>
                  <tr>
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.td2_1,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.td2_2,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.table.td2_3,
                        }}
                    />
                  </tr>
                  </tbody>
                </PrivacyTable>
                <Note>
                  <h4
                      className="font-semibold text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: t.newsletter.note.title,
                      }}
                  />
                  <ul className="list-disc ml-6 space-y-1 mt-2">
                    <li
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.note.li1,
                        }}
                    />
                    <li
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.note.li2,
                        }}
                    />
                    <li
                        dangerouslySetInnerHTML={{
                          __html: t.newsletter.note.li3,
                        }}
                    />
                  </ul>
                </Note>
                <h3
                    className="text-xl font-semibold text-gray-800 mb-3 mt-6"
                    dangerouslySetInnerHTML={{ __html: t.newsletter.deletion }}
                />
                <p
                    dangerouslySetInnerHTML={{ __html: t.newsletter.deletionText }}
                />
              </div>

              {/* 5. Externe Datenverarbeitung (Auftragsverarbeiter) */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.processors.title }}
                />
                <p dangerouslySetInnerHTML={{ __html: t.processors.intro }} />
                <PrivacyTable>
                  <thead className="bg-gray-50">
                  <tr>
                    <Th
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.th1,
                        }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.th2,
                        }}
                    />
                    <Th
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.th3,
                        }}
                    />
                  </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td1_1,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td1_2,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td1_3,
                        }}
                    />
                  </tr>
                  <tr>
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td2_1,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td2_2,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td2_3,
                        }}
                    />
                  </tr>
                  <tr>
                    <Td
                        isStrong
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td3_1,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td3_2,
                        }}
                    />
                    <Td
                        dangerouslySetInnerHTML={{
                          __html: t.processors.table.td3_3,
                        }}
                    />
                  </tr>
                  </tbody>
                </PrivacyTable>
              </div>

              {/* 6. Sicherheit (TOMs) */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.toms.title }}
                />
                <p dangerouslySetInnerHTML={{ __html: t.toms.intro }} />
                <ul className="list-disc ml-6 space-y-2 mt-4">
                  <li dangerouslySetInnerHTML={{ __html: t.toms.li1 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.toms.li2 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.toms.li3 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.toms.li4 }} />
                </ul>
              </div>

              {/* 7. Ihre Rechte */}
              <div>
                <h2
                    className="text-2xl font-semibold text-gray-800 mb-4"
                    dangerouslySetInnerHTML={{ __html: t.rights.title }}
                />
                <p dangerouslySetInnerHTML={{ __html: t.rights.intro }} />
                <ol className="list-decimal ml-6 space-y-2 mt-4">
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li1 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li2 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li3 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li4 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li5 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li6 }} />
                  <li dangerouslySetInnerHTML={{ __html: t.rights.li7 }} />
                </ol>
                <p
                    className="mt-4"
                    dangerouslySetInnerHTML={{ __html: t.rights.outro }}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
  );
};

export default PrivacyPage;