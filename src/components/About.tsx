const About = () => {
  return <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About Enactus Lüneburg
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">Enactus is a social entrepreneurship initiative operating in 37 countries all over the world, whose members pursue the goal of creating an economic perspective for third parties and serving the common good by founding sustainable, social start-ups.</p>
            
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <img src="/lovable-uploads/24735b0c-8816-4b6c-85b9-323044f95e39.png" alt="Enactus Logo" className="h-12 w-12 object-contain" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Enactus Global Network</h3>
                <p className="text-gray-600">Part of a worldwide movement</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-800">37</h3>
                  <p className="text-gray-600">Countries Worldwide</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-800">1,700+</h3>
                  <p className="text-gray-600">Universities</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-800">70,000+</h3>
                  <p className="text-gray-600">Students</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-800">2012</h3>
                  <p className="text-gray-600">Founded</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;