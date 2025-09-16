function EventsSection() {
  const [expandedEvent, setExpandedEvent] = React.useState(null);
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

  const events = [
    {
      id: 1,
      title: 'Paper Trails',
      category: 'Technical',
      teaser: 'Build innovative AI solutions in 24 hours',
      rules: ['Teams of 2-3 members', 'Technical based topics are only allowed.', 'preference - Submit working prototype', 'Time limit -  5minutes ', 'Last date for paper submission is '],
      date: 'October 13, 2025',
      time: '11:00 AM - 12:00 PM ',
      venue: ' Main Auditorium ',
      maxParticipants: '100'
    },
    {
      id: 2,
      title: 'Debug code',
      category: 'Technical',
      teaser: 'Transform complex data into compelling visual stories',
      rules: ['Individual or team participation', 'Time limit - 20 minutes', 'Rounds - 2 ', 'Focus on insights'],
      date: 'October 13, 2025',
      time: '12:00 PM - 1:00 PM',
      venue: 'AI/DS Lab',
      maxParticipants: '80'
    },
    {
      id: 3,
      title: ' Find the song',
      category: 'Non-Technical',
      teaser: '-',
      rules: ['-'],
      date: 'October 13, 2025',
      time: '2:00 PM - 3:00 PM',
      venue: 'Main Auditorium',
      maxParticipants: '150'
    },
    {
      id: 4,
      title: 'Esportz',
      category: 'Non-Technical',
      teaser: 'showcase your talent',
      rules: ['-'],
      date: 'October 13, 2025',
      time: '12:00 PM - 1:00 PM',
      venue: 'Conference Hall',
      maxParticipants: '60'

    }
  ];


  const toggleEvent = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <section id="events" ref={sectionRef} className="py-20 relative z-10" data-name="events-section" data-file="components/EventsSection.js">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Featured</span> <span className="text-[var(--neon-red)]">Events</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Participate in exciting technical challenges and showcase your skills in our diverse range of events
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`event-card glass-card p-6 transition-all duration-700 delay-${index * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${expandedEvent === event.id ? 'md:col-span-2' : ''}`}
              onClick={() => toggleEvent(event.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${event.category === 'Technical' ? 'bg-blue-500 bg-opacity-30 text-blue-300 border border-blue-400' : 'bg-green-500 bg-opacity-30 text-green-300 border border-green-400'}`}>
                    {event.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.teaser}</p>
                </div>
                <div className={`icon-${expandedEvent === event.id ? 'chevron-up' : 'chevron-down'} text-xl text-[var(--neon-red)] transition-transform duration-300`}></div>
              </div>

              {expandedEvent === event.id && (
                <div className="mt-6 pt-6 border-t border-[var(--glass-border)] animate-in slide-in-from-top-2 duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--neon-red)] mb-3">Event Details</h4>
                      <div className="space-y-2 text-gray-300">
                        <p><span className="text-white font-medium">Date:</span> {event.date}</p>
                        <p><span className="text-white font-medium">Time:</span> {event.time}</p>
                        <p><span className="text-white font-medium">Venue:</span> {event.venue}</p>
                        <p><span className="text-white font-medium">Max Participants:</span> {event.maxParticipants}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-[var(--neon-red)] mb-3">Rules & Information</h4>
                      <ul className="text-gray-300 text-sm mb-4">
                        {event.rules.map((rule, idx) => (
                          <li key={idx} className="mb-1">• {rule}</li>
                        ))}
                      </ul>
                      <div className="text-gray-300 text-sm">
                        Exciting prizes and certificates await the winners!
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a 
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeqUt5crxQgY6GHppCDl-Fgnw06wwfyb6xBp1rR9HO-YM48jg/alreadyresponded" 
                      target="_blank" 
                      rel="noopener noreferrer"

                      className="neon-button inline-block"
                    >
                      Register for Event
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
