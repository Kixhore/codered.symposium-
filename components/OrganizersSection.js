function OrganizersSection() {
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

  const organizers = [
    {
      name: 'Mrs. Haseenath Jaseela A',
      role: 'Faculty Coordinator',
      image: ''
    },
    {
      name: 'Mrs. Mary Leo Sherlin W',
      role: 'Faculty Coordinator',
      image: ''
    },
    {
      name: 'Dr. Mary Bearly E',
      role: 'Convenor',
      image: ''
    },
    {
      name: 'Mr. Kishore Kumar',
      role: 'Student Coordinator',
      image: ''
    },
    {
      name: 'Ms. Siva Sakthi',
      role: 'Student Coordinator',
      image: ''
    }
  ];


  try {
    return (
      <section id="organizers" ref={sectionRef} className="py-20 relative z-10" data-name="organizers-section" data-file="components/OrganizersSection.js">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Event</span> <span className="text-[var(--neon-red)]">Organizers</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              CODERED 2025, organized by the Department of Artificial Intelligence and Data Science, 
              Loyola Institute of Technology and Science (LITES), is powered by our dedicated faculty 
              and student coordinators. With their passion and teamwork, we are excited to bring you 
              an engaging and memorable symposium experience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-items-center max-w-5xl mx-auto">
            {organizers.map((organizer, index) => (
              <div
                key={index}
                className={`text-center w-full max-w-xs transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[var(--neon-red)] hover:glow-red transition-all duration-300">
                  <img 
                    src={organizer.image} 
                    alt={organizer.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{organizer.name}</h3>
                <p className="text-[var(--neon-red)] text-sm font-medium">{organizer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('OrganizersSection component error:', error);
    return null;
  }
}
