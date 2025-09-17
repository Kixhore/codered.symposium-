function Footer() {
  try {
    return (
      <footer className="relative z-10 py-12 border-t border-[var(--glass-border)]" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[var(--neon-red)] mb-4">LITS Symposium</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Loyola Institute of Technology & Science Department of AI & Data Science Symposium 2025. 
                Bringing together the brightest minds in artificial intelligence and data science.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="text-gray-300 hover:text-[var(--neon-red)] transition-colors">About</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-[var(--neon-red)] transition-colors">Events</a></li>
                <li><a href="#schedule" className="text-gray-300 hover:text-[var(--neon-red)] transition-colors">Schedule</a></li>
                <li><a href="#speakers" className="text-gray-300 hover:text-[var(--neon-red)] transition-colors">Speakers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>symposium@lits.edu.in</p>
                <p>+91 98765 43210</p>
                <p>Kanyakumari, Tamil Nadu, India</p>
              </div>
            </div>

          </div>
          
          <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © designed and developed by kishore.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a 
                href="https://twitter.com/demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="icon-twitter text-sm text-[var(--neon-red)]"></div>
              </a>
              <a 
                href="https://www.instagram.com/ad_homizz?igsh=M2pmb2U2ZGc4cm41" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="icon-instagram text-sm text-[var(--neon-red)]"></div>
              </a>
              <a 
                href="https://github.com/demo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="icon-github text-sm text-[var(--neon-red)]"></div>
              </a>
              <a 
                href="https://www.linkedin.com/in/kishore-m-47960b2a1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="icon-linkedin text-sm text-[var(--neon-red)]"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
