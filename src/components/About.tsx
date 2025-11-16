
const About = () => {
  return <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Enactus </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">Enactus is a social entrepreneurship initiative operating in 37 countries all over the world, whose members pursue the goal of creating an economic perspective for third parties and serving the common good by founding sustainable, social start-ups.</p>

            <div className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
              <img src="/logos/Enactus-logo.svg" alt="Enactus Logo" className="h-25 w-28 object-contain" />
              <div>
                <h3 className="font-semibold text-gray-800">Enactus Global Network</h3>
                <p className="text-orange-700">Part of a worldwide movement</p>
              </div>
            </div>

          </div>

          <div className="relative">
            <div
                className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 shadow-lg border border-orange-200">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                  <h3 className="text-2xl font-bold text-orange-700">37</h3>
                  <p className="text-gray-700">Countries Worldwide</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                  <h3 className="text-2xl font-bold text-orange-700">1,700+</h3>
                  <p className="text-gray-700">Universities</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                  <h3 className="text-2xl font-bold text-orange-700">70,000+</h3>
                  <p className="text-gray-700">Students</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-orange-100">
                  <h3 className="text-2xl font-bold text-orange-700">2012</h3>
                  <p className="text-gray-700">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;
