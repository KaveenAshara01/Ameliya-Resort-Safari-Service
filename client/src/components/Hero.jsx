function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-600 via-cyan-600 to-blue-600 text-white py-24 px-4">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Your Journey Begins Here
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Discover world-class destinations with our carefully curated tourism packages
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#packages"
            className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-xl"
          >
            Explore Packages
          </a>
          <a
            href="#contact"
            className="bg-primary-700 text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary-800 transition-colors duration-200 border-2 border-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249 250 251)"/>
        </svg>
      </div>
    </section>
  );
}

export default Hero;

