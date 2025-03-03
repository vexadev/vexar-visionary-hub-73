
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Discord Bots",
    description: "Custom Discord bots with powerful moderation, music, and utility features to enhance your server experience.",
    features: ["Easy configuration", "24/7 uptime", "Custom commands"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    delay: 0
  },
  {
    id: 2,
    name: "Server Templates",
    description: "Pre-configured Discord server templates with channels, roles, and permissions optimized for different community types.",
    features: ["Gaming communities", "Educational servers", "Development teams"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    delay: 0.2
  },
  {
    id: 3,
    name: "Open-Source Tools",
    description: "Free and open-source tools to help you build, manage and grow your Discord community with ease.",
    features: ["Community-driven", "MIT licensed", "Regular updates"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    delay: 0.4
  }
];

const Products = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="reveal max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-medium tracking-wider mb-6">
            OUR PROJECTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cool Projects For Our Community
          </h2>
          <p className="text-lg text-muted-foreground">
            Check out the useful tools and resources we've created for Discord users and developers to enhance their server experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="reveal rounded-lg overflow-hidden hover-lift bg-white border border-gray-200 shadow-sm"
              style={{ animationDelay: `${0.3 + project.delay}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="bg-gray-100 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-primary hover:bg-gray-50 border border-gray-200 mt-2 flex items-center justify-center">
                  View Project <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
