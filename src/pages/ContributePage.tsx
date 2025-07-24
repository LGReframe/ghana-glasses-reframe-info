import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Contribute = () => {
    return (
        <>
            <Navigation />
            <main className="bg-white min-h-screen px-4 py-16 sm:px-6 lg:px-8 text-gray-900">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-reframe-primary mb-4">Contribute to Reframe</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        Financial support allows us to scale our operations and reduce the cost of glasses for people in Ghana.
                        Every donation helps us reach more communities and provide sustainable access to vision.                    </p>
                </div>

                <section className="mt-20 max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
                    <div className="bg-reframe-background p-6 rounded shadow-sm">
                        <h3 className="text-xl font-semibold mb-4 text-reframe-primary">Donate by Bank Transfer</h3>
                        <p className="text-sm text-gray-800 mb-4">
                            You can support Reframe with a direct donation to our account:
                        </p>
                        <div className="text-sm text-gray-700 space-y-1">
                            <p><strong>Recipient:</strong> Enactus Lüneburg e.V.</p>
                            <p><strong>Bank:</strong> Volksbank Lüneburger Heide eG</p>
                            <p><strong>IBAN:</strong> DE71 2406 0300 8533 9059 00</p>
                            <p><strong>BIC:</strong> GENODEF1NBU</p>
                            <p><strong>Reference:</strong> Spende Reframe</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                            If you’d like a donation receipt, please include your email address in the reference field.
                        </p>
                    </div>

                    <div className="bg-reframe-background p-6 rounded shadow-sm border border-gray-200">
                        <h3 className="text-xl font-semibold mb-4 text-reframe-primary">Donate Glasses</h3>
                        <p className="text-sm text-gray-800 mb-4">
                            Do you have old glasses? Any glasses will help, Reading, distance, or sunglasses you no longer use? Donating them helps someone regain access to the world around them.
                        </p>
                        <p className="text-sm text-gray-700 mb-4">
                            Simply check their <a href="https://brillenweltweit.de/start/brillen-sammelstellen-liste/"
                                                  target="_blank" rel="noopener noreferrer"
                                                  className="text-reframe-primary underline-animation">collection point
                            map</a> to find a location near you.
                        </p>
                    </div>
                </section>

            </main>
            <Footer/>
        </>
    );
};

export default Contribute;
