function AboutSection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative z-10" data-name="about-section" data-file="components/AboutSection.js">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">About</span> <span className="text-[var(--neon-red)]">the Symposium</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-8 glow-white">
              <h3 className="text-2xl font-bold text-[var(--neon-red)] mb-4">Vision & Purpose</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The LITS AI & Data Science Symposium brings together brilliant minds, innovative researchers, 
                and industry leaders to explore the frontiers of artificial intelligence and data science. 
                Our mission is to foster collaboration, share cutting-edge research, and inspire the next 
                generation of AI pioneers.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Join us for an immersive experience featuring technical competitions, research presentations, 
                expert talks, and networking opportunities that will shape the future of technology.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'users', title: 'Expert Network', desc: 'Connect with industry leaders and researchers' },
                { icon: 'trophy', title: 'Competitions', desc: 'Technical and non-technical challenges' },
                { icon: 'lightbulb', title: 'Innovation', desc: 'Cutting-edge AI and ML research' },
                { icon: 'award', title: 'Recognition', desc: 'Prizes and certificates for winners' }
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 text-center hover:glow-red transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className={`icon-${item.icon} text-xl text-[var(--neon-red)]`}></div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
