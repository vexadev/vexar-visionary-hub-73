
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-xl md:text-2xl tracking-tight">Vexar Development</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Products
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Order Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg ${
          mobileMenuOpen ? 'max-h-64' : 'max-h-0'
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#products" 
            className="text-sm font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium py-2 border-b border-gray-100"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Order Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
