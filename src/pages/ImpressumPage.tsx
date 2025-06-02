
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
      <Navigation />
      
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Impressum
            </h1>
          </div>
          
          <div className="bg-white border border-green-100 rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Angaben gemäß § 5 TMG</h2>
                <p className="text-gray-600">
                  Enactus Lüneburg e.V.<br />
                  Universitätsallee 1<br />
                  21335 Lüneburg<br />
                  Deutschland
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Vertreten durch</h2>
                <p className="text-gray-600">
                  [Vorstandsvorsitzender Name]<br />
                  [Weitere Vorstandsmitglieder]
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Kontakt</h2>
                <p className="text-gray-600">
                  Telefon: +49 (0) 4131 677-0<br />
                  E-Mail: reframe@enactus-lueneburg.de
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Registereintrag</h2>
                <p className="text-gray-600">
                  Eintragung im Vereinsregister.<br />
                  Registergericht: [Amtsgericht]<br />
                  Registernummer: [VR-Nummer]
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Umsatzsteuer-ID</h2>
                <p className="text-gray-600">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  [USt-IdNr. falls vorhanden]
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p className="text-gray-600">
                  [Name des Verantwortlichen]<br />
                  Universitätsallee 1<br />
                  21335 Lüneburg
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Haftungsausschluss</h2>
                <div className="space-y-4 text-gray-600">
                  <div>
                    <h3 className="font-medium text-gray-700">Haftung für Inhalte</h3>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Haftung für Links</h3>
                    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700">Urheberrecht</h3>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ImpressumPage;
