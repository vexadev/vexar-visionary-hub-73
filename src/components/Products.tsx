
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Lambda Go",
    description: "A powerful serverless computing platform that allows you to run code without provisioning or managing servers.",
    features: ["Instant scaling", "Zero server management", "Pay-per-use pricing"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    delay: 0
  },
  {
    id: 2,
    name: "Dev Rel",
    description: "Our developer relations platform that helps you build and nurture developer communities around your products.",
    features: ["Community insights", "Event management", "Developer feedback loop"],
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    delay: 0.2
  },
  {
    id: 3,
    name: "Vexar Cloud",
    description: "A comprehensive cloud platform that provides infrastructure, platform, and software as a service.",
    features: ["Global infrastructure", "Advanced security", "Flexible pricing"],
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
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider mb-6">
            OUR PRODUCTS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cutting-Edge Solutions for Modern Challenges
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover our suite of innovative products designed to help businesses and developers thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="reveal rounded-lg overflow-hidden hover-lift bg-white border border-gray-100 shadow-sm"
              style={{ animationDelay: `${0.3 + product.delay}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-primary hover:bg-blue-50 border border-blue-200 mt-2 flex items-center justify-center">
                  Learn More <ArrowRight size={16} className="ml-2" />
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
