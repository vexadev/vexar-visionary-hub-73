import { useEffect, useRef } from 'react';

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    bio: "With over 10 years of experience in software development, Alex founded Vexar Development with a vision to create impactful software solutions. Specialized in full-stack development and system architecture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    delay: 0
  },
  {
    name: "Samantha Lee",
    role: "Senior Developer",
    bio: "Samantha brings 7 years of expertise in front-end development and UI/UX design. She's passionate about creating intuitive and accessible user experiences.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    delay: 0.1
  },
  {
    name: "David Wilson",
    role: "Backend Specialist",
    bio: "David excels in building robust backend systems and database architecture. His 6 years of experience ensures our applications are performant and scalable.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    delay: 0.2
  }
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const memberRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (statsRef.current) observer.observe(statsRef.current);
    if (teamRef.current) observer.observe(teamRef.current);
    
    memberRefs.current.forEach((member) => {
      if (member) observer.observe(member);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (statsRef.current) observer.unobserve(statsRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
      
      memberRefs.current.forEach((member) => {
        if (member) observer.unobserve(member);
      });
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="reveal max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium tracking-wider mb-6">
            ABOUT US
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the Team Behind Vexar Development
          </h2>
          <p className="text-lg text-muted-foreground">
            We're a small but mighty team of dedicated developers with a passion for creating exceptional software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div ref={statsRef} className="reveal grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Expert Developers</div>
              </div>
            </div>

            <div className="reveal space-y-6 text-muted-foreground">
              <p>
                Founded by Alex Chen in 2019, Vexar Development started with a simple mission: to build software that makes a difference. What began as a solo venture has grown into a small team of dedicated professionals.
              </p>
              <p>
                We specialize in web development, mobile applications, and custom software solutions. Our approach combines technical excellence with a deep understanding of our clients' needs.
              </p>
              <p>
                At Vexar, we believe in quality over quantity. We take on a limited number of projects to ensure we can give each one the attention it deserves. This focus has helped us build long-lasting relationships with our clients.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Vexar Development Team" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-8">
                  <div className="text-white text-2xl font-bold">Our Workspace</div>
                  <div className="text-white/80">Where ideas come to life</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-50 rounded-full -z-10"></div>
          </div>
        </div>

        <div ref={teamRef} className="reveal text-center mb-12">
          <h3 className="text-2xl font-bold mb-2">Our Team</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the people who make the magic happen
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              ref={(el) => (memberRefs.current[index] = el)}
              className="reveal group"
              style={{ animationDelay: `${0.3 + member.delay}s` }}
            >
              <div className="relative overflow-hidden rounded-lg hover-lift bg-white p-6 border border-gray-100 shadow-sm transition duration-300 h-full flex flex-col">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{member.bio}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
