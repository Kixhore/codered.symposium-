function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Contact', href: '#coordinators' }
  ];


  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-card border-0 border-b border-[var(--glass-border)]" data-name="navigation" data-file="components/Navigation.js">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img 
              src="https://res.cloudinary.com/dk7bsn6ka/image/upload/v1755193135/1_lppjjq.png" 
              alt="LITS Symposium Logo" 
              className="h-10 w-auto"
            />
          </div>
          

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-[var(--neon-red)] px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeqUt5crxQgY6GHppCDl-Fgnw06wwfyb6xBp1rR9HO-YM48jg/alreadyresponded" 
                target="_blank" 
                rel="noopener noreferrer"

                className="neon-button text-sm inline-block"
              >
                Register
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[var(--neon-red)] p-2"
            >
              <div className={`icon-${isOpen ? 'x' : 'menu'} text-xl`}></div>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden glass-card border-t border-[var(--glass-border)]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-[var(--neon-red)] block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <a 
              href="https://forms.google.com/demo-registration-form" 
              target="_blank" 
              rel="noopener noreferrer"
              className="neon-button w-full mt-4 inline-block text-center"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
