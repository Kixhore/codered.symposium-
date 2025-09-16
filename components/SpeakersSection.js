function SpeakersSection() {
  const [selectedSpeaker, setSelectedSpeaker] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const speakers = [
    {
      id: 1,
      name: 'Ms. Julee Kirupavathi',
      role: 'AI Research Director',
      company: 'TechCorp AI Labs',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      bio: 'Leading expert in machine learning with 15+ years of experience in developing AI solutions for healthcare and autonomous systems.',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      talk: 'The Future of AI in Healthcare'
    }
  ];

  return (
    <section id="speakers" ref={sectionRef} className="py-20 relative z-10" data-name="speakers-section" data-file="components/SpeakersSection.js">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[var(--neon-red)]">Featured</span> <span className="text-white">Speaker</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Learn from industry leaders and renowned experts in AI and Data Science

          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-xs">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className={`glass-card p-6 text-center cursor-pointer transition-all duration-700 delay-${index * 100} hover:glow-red ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              onClick={() => setSelectedSpeaker(speaker)}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--neon-red)]">
                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{speaker.name}</h3>
              <p className="text-[var(--neon-red)] text-sm font-semibold mb-1">{speaker.role}</p>
              <p className="text-gray-400 text-xs mb-3">{speaker.company}</p>
              <p className="text-gray-300 text-sm mb-4">{speaker.talk}</p>
              <button className="text-[var(--neon-red)] text-sm hover:text-white transition-colors">
                View Profile →
              </button>
            </div>
          ))}
          </div>
        </div>

        {selectedSpeaker && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
            <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--neon-red)]">
                    <img src={selectedSpeaker.image} alt={selectedSpeaker.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{selectedSpeaker.name}</h3>
                    <p className="text-[var(--neon-red)] font-semibold">{selectedSpeaker.role}</p>
                    <p className="text-gray-400">{selectedSpeaker.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <div className="icon-x"></div>
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[var(--neon-red)] mb-2">Talk</h4>
                <p className="text-white font-medium">{selectedSpeaker.talk}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[var(--neon-red)] mb-2">Biography</h4>
                <p className="text-gray-300 leading-relaxed">{selectedSpeaker.bio}</p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-[var(--neon-red)] mb-2">Connect</h4>
                <a 
                  href={selectedSpeaker.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 bg-opacity-20 text-blue-400 rounded-lg hover:bg-opacity-30 transition-all duration-300"
                >
                  <div className="icon-linkedin text-lg"></div>
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
