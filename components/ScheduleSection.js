function ScheduleSection() {
  const [selectedDay, setSelectedDay] = React.useState(1);
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

  const schedule = {
    1: [
      { time: '9:00 AM', event: 'Registration & Welcome Coffee', type: 'general' },
      { time: '10:00 AM', event: 'Opening Ceremony', type: 'keynote' },
      { time: '10:30 AM', event: 'AI Hackathon Begins', type: 'technical' },
      { time: '10:45 AM', event: 'Keynote: Future of AI', type: 'keynote' },
      { time: '11:00 AM', event: 'Paper Trails', type: 'technical' },
      { time: '12:00 PM', event: 'Quizathon', type: 'technical' },
      { time: '1:00 PM', event: 'Lunch Break', type: 'break' },
      { time: '2:00 PM', event: 'Melody Quest ', type: 'non-technical' },
      { time: '3:00 PM', event: 'prize announcement ', type: 'discussion' },
      { time: '4:00 PM', event: 'clossing ceremony ', type: 'farewell' }
    ],
    
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'keynote': return 'text-[var(--neon-red)] border-[var(--neon-red)]';
      case ' non-technical': return 'text-blue-400 border-blue-400';
      case 'technical': return 'text-green-400 border-green-400';
      case 'discussion': return 'text-purple-400 border-purple-400';
      case 'farewell': return 'text-yellow-400 border-yellow-400';
      case 'break': return 'text-gray-400 border-gray-400';
      default: return 'text-white border-white';
    }
  };


  return (
    <section id="schedule" ref={sectionRef} className="py-20 relative z-10" data-name="schedule-section" data-file="components/ScheduleSection.js">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Event</span> <span className="text-[var(--neon-red)]">Schedule</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--neon-red)] mx-auto mb-8"></div>
        </div>

        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-2 flex gap-2">
            {[1].map((day) => (
              <button
                key={day}

                onClick={() => setSelectedDay(day)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDay === day 
                    ? 'bg-[var(--neon-red)] text-black' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Day {day} - October {12 + day}
              </button>
            ))}

          </div>
        </div>

        <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--neon-red)] to-transparent"></div>
            
            <div className="space-y-8">
              {schedule[selectedDay].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[var(--neon-red)]"></div>
                  </div>
                  
                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-1/2 md:pr-8' : 'md:ml-1/2 md:pl-8'} w-full md:w-1/2`}>
                  <div className={`glass-card p-6 border-l-4 ${getEventColor(item.type)}`}>
                    <div className="flex justify-between items-start mb-2">

                      <span className="text-lg font-bold text-white">{item.time}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${item.type === 'keynote' ? 'bg-white bg-opacity-20 text-white' : 'bg-opacity-20'} ${getEventColor(item.type).replace('border-', 'bg-')}`}>
                        {item.type}
                      </span>
                    </div>
                    <h4 className="text-white font-semibold">{item.event}</h4>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
