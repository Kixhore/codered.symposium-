function CoordinatorsSection() {
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

  const coordinators = {
    faculty: [
      { name: 'Mrs. Mary Leo Sherlin ', phone: '+91 9344447126', email: 'maryleosherlin@lits.edu.in' },
      { name: 'Mrs. Haseenath Jaseela ', phone: '+91 9442049657', email: 'haseenathjaseela@lits.edu.in' }
    ],
    students: [
      { name: 'Mr. Kishore Kumar', phone: '+91 7397638429', email: 'kishorekumar@student.lits.edu.in' },
      { name: 'Ms. Siva Sakthi', phone: '+91 8220075290', email: 'shakthi@student.lits.edu.in' }

    ]

  };

  try {
    return (
      <section id="coordinators" ref={sectionRef} className="py-20 relative z-10" data-name="coordinators-section" data-file="components/CoordinatorsSection.js">
        <div className="max-w-6xl mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">Symposium</span> <span className="text-[var(--neon-red)]">Coordinators</span>
            </h2>
            <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              For any doubts and queries, please contact our coordinators
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className="icon-graduation-cap text-xl text-[var(--neon-red)]"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--neon-red)]">Faculty Coordinators</h3>
                </div>
                <div className="space-y-4">
                  {coordinators.faculty.map((coordinator, index) => (
                    <div key={index} className="p-4 bg-black bg-opacity-30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white font-semibold">{coordinator.name}</h4>
                          <p className="text-gray-400 text-sm">Faculty Coordinator</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[var(--neon-red)] font-medium text-sm">{coordinator.phone}</p>
                        <p className="text-gray-300 text-sm">{coordinator.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="glass-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center">
                    <div className="icon-users text-xl text-[var(--neon-red)]"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--neon-red)]">Student Coordinators</h3>
                </div>
                <div className="space-y-4">
                  {coordinators.students.map((coordinator, index) => (
                    <div key={index} className="p-4 bg-black bg-opacity-30 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-white font-semibold">{coordinator.name}</h4>
                          <p className="text-gray-400 text-sm">Student Coordinator</p>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[var(--neon-red)] font-medium text-sm">{coordinator.phone}</p>
                        <p className="text-gray-300 text-sm">{coordinator.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="glass-card p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="icon-phone text-2xl text-[var(--neon-red)]"></div>
                <h4 className="text-xl font-semibold text-white">Need Help?</h4>
              </div>
              <p className="text-gray-300">
                Contact any of our coordinators via phone or email for assistance with registration, event details, or general inquiries about the symposium.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CoordinatorsSection component error:', error);
    return null;
  }
}
