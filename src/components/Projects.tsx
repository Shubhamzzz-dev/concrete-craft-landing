
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import TestimonialCard from './TestimonialCard';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const projectCategories = [
    {
      title: "Infrastructure Projects",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Supporting critical highway, bridge, and tunnel projects across Mumbai."
    },
    {
      title: "Commercial Buildings",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Providing concrete solutions for office complexes, retail spaces, and industrial facilities."
    },
    {
      title: "Residential Complexes",
      image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Trusted supplier for housing developments and apartment buildings."
    },
    {
      title: "Government Projects",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      description: "Partnering with government agencies on public infrastructure initiatives."
    }
  ];
  
  const testimonials = [
    {
      quote: "Ruprabha Industries has been our go-to concrete supplier for years. Their quality and reliability are unmatched in the industry.",
      author: "Rajesh Sharma",
      role: "Project Manager",
      company: "Metro Construction Ltd",
      rating: 5
    },
    {
      quote: "We've completed numerous government projects with Ruprabha's concrete. Their technical support team has been invaluable.",
      author: "Priya Patel",
      role: "Chief Engineer",
      company: "Mumbai Infrastructure Corp",
      rating: 5
    },
    {
      quote: "Timely deliveries and consistent quality make Ruprabha Industries stand out from other suppliers in the region.",
      author: "Vivek Mehta",
      role: "Site Supervisor",
      company: "Urban Developers",
      rating: 4
    }
  ];
  
  return (
    <section id="projects" className="section-padding bg-concrete-50">
      <div className="container mx-auto container-padding">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title text-center">Projects & Clients</h2>
          <p className="section-subtitle text-center mx-auto">
            Trusted by over 50 clients across government and private sectors, our concrete solutions build Mumbai's skyline.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {projectCategories.map((category, index) => (
              <div 
                key={index} 
                className="group rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-white p-5">
                  <h3 className="text-lg font-bold text-concrete-800 mb-2">{category.title}</h3>
                  <p className="text-concrete-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-concrete-800 mb-10 text-center">What Our Clients Say</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-xl font-bold text-concrete-800 mb-8">Trusted by Leading Companies in Construction</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {/* Company logos would go here - using placeholder colored blocks */}
                <div className="h-14 flex items-center justify-center bg-concrete-100 rounded-md opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-concrete-500 font-semibold">Mumbai Infrastructure</span>
                </div>
                <div className="h-14 flex items-center justify-center bg-concrete-100 rounded-md opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-concrete-500 font-semibold">Urban Developers</span>
                </div>
                <div className="h-14 flex items-center justify-center bg-concrete-100 rounded-md opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-concrete-500 font-semibold">Metro Construction</span>
                </div>
                <div className="h-14 flex items-center justify-center bg-concrete-100 rounded-md opacity-70 hover:opacity-100 transition-opacity">
                  <span className="text-concrete-500 font-semibold">City Builders Ltd</span>
                </div>
              </div>
              
              <Button className="mt-12 bg-blue-700 hover:bg-blue-800 text-white">
                View Our Project Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
