
import { useEffect, useState } from 'react';

const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const shadowClass = shadow ? 'shadow-md bg-white' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shadowClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">Vexar Dev</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="/team" className="text-sm font-medium hover:text-primary transition-colors">Team</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
