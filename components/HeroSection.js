function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-16" data-name="hero-section" data-file="components/HeroSection.js">
      <div className="text-center max-w-4xl mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8 flex flex-col items-center">
            <img 
              src="https://res.cloudinary.com/dk7bsn6ka/image/upload/v1758387143/IMG-20250908-WA0002_1_omk034.png" 
              alt="LITS AI & Data Science Symposium 2025" 
              className="max-w-lg w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            <h1 className="text-2xl md:text-4xl font-bold mt-6 text-glow italic">
              <span className="text-[var(--neon-red)]">Silence will be the last algorithm</span>
            </h1>
          </div>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-4">
            October 13, 2025
          </div>
          


          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Welcome to CODERED 2025 – the premier National Level Technical Symposium organized by the Department of Artificial Intelligence & Data Science, Loyola Institute of Technology and Science
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeqUt5crxQgY6GHppCDl-Fgnw06wwfyb6xBp1rR9HO-YM48jg/alreadyresponded" 
              target="_blank" 
              rel="noopener noreferrer"

              className="neon-button text-lg px-8 py-4 animate-pulse-glow inline-block"
            >
              <div className="icon-calendar text-lg mr-2 inline-block"></div>
              Register Now
            </a>
            <button 
              onClick={() => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })}
              className="glass-card px-8 py-4 text-lg text-white hover:glow-white transition-all duration-300"
            >
              <div className="icon-arrow-down text-lg mr-2 inline-block"></div>
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '4+', label: 'Events' },
            { number: '200+', label: 'Participants' },
            { number: '2+', label: 'Speakers' },
            { number: '1+', label: 'Days' }
          ].map((stat, index) => (
            <div key={index} className={`transition-all duration-700 delay-${index * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>

              <div className="text-3xl md:text-4xl font-bold text-[var(--neon-red)] mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
