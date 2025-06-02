
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Datenschutzerklärung
            </h1>
          </div>
          
          <div className="bg-white border border-green-100 rounded-xl p-8 shadow-lg">
            <div className="space-y-6 text-gray-600">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">1. Datenschutz auf einen Blick</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Datenschutz</h3>
                  <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                  
                  <h3 className="font-medium text-gray-700">Hinweis zur verantwortlichen Stelle</h3>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p className="ml-4">
                    Enactus Lüneburg e.V.<br />
                    Universitätsallee 1<br />
                    21335 Lüneburg<br />
                    Deutschland<br />
                    <br />
                    Telefon: +49 (0) 4131 677-0<br />
                    E-Mail: reframe@enactus-lueneburg.de
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">3. Datenerfassung auf dieser Website</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Cookies</h3>
                  <p>Diese Website verwendet keine Cookies für die Grundfunktionalität. Sollten in Zukunft Cookies verwendet werden, werden Sie entsprechend informiert.</p>
                  
                  <h3 className="font-medium text-gray-700">Server-Log-Dateien</h3>
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">4. Kontaktformular</h2>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">5. Ihre Rechte</h2>
                <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.</p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">6. Externe Links</h2>
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-700">Instagram</h3>
                  <p>Diese Website enthält Links zu Instagram. Beim Klick auf diese Links werden Sie zu Instagram weitergeleitet. Wir haben keinen Einfluss auf die Datenverarbeitung durch Instagram. Informationen zum Datenschutz bei Instagram finden Sie in der Datenschutzerklärung von Instagram.</p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Stand: Januar 2025<br />
                  Diese Datenschutzerklärung wurde mit dem Datenschutz-Generator erstellt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;
