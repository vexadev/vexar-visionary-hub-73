
import { useEffect, useState } from 'react';
import Logo from './Logo';

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

  const shadowClass = shadow ? 'shadow-md bg-white dark:bg-black' : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shadowClass}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center">
            <Logo />
          </a>
          
          <nav className="hidden md:flex items-center space-x-10">
            <a href="/" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">Home</a>
            <a href="/team" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">Team</a>
            <a href="#about" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">Contact</a>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-black dark:hover:text-white">
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
