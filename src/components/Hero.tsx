
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 -z-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2363b3ed' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E"
        }}
      ></div>

      <div className="container mx-auto px-6 z-10">
        <div 
          ref={heroRef}
          className="reveal flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            VEXAR DEVELOPMENT
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Transforming Ideas Into <span className="text-primary">Exceptional</span> Software
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl text-balance animate-fade-in" style={{ animationDelay: '0.7s' }}>
            We're a dedicated team of developers creating custom software solutions that solve real-world problems. Discover our expertise in web development, mobile applications, and custom software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-md">
              Our Services
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-md">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <button 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce"
        onClick={scrollToNext}
        aria-label="Scroll down"
      >
        <ChevronDown size={36} className="text-gray-400" />
      </button>
    </div>
  );
};

export default Hero;
