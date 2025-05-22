
import { useEffect, useRef } from 'react';
import { Flask, Truck, Lab, ShieldCheck } from "lucide-react";

const Services = () => {
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
  
  const services = [
    {
      icon: <Flask className="h-10 w-10 text-blue-600" />,
      title: "Ready Mixed Concrete",
      description: "High-quality concrete made with Portland Cement, water, and aggregates, mixed to precise specifications for your project needs."
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Transport & Delivery",
      description: "Timely and safe delivery of Ready Mixed Concrete via our fleet of Transit Mixers, ensuring the material arrives in perfect condition."
    },
    {
      icon: <Lab className="h-10 w-10 text-blue-600" />,
      title: "In-house Laboratory",
      description: "Our advanced testing facilities ensure every batch of concrete meets quality standards and project specifications."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Technical Support",
      description: "Expert guidance and support for construction clients, helping you choose the right concrete mix for your specific project requirements."
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-concrete-50">
      <div className="container mx-auto container-padding">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title text-center">What We Offer</h2>
          <p className="section-subtitle text-center mx-auto">
            Our comprehensive range of concrete solutions and services designed to support your construction projects.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-concrete-100 flex flex-col items-center text-center"
              >
                <div className="bg-blue-50 p-4 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-concrete-800 mb-4">{service.title}</h3>
                <p className="text-concrete-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-blue-700 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"/>
              </svg>
            </div>
            
            <div className="relative z-10 md:w-2/3">
              <h3 className="text-2xl font-bold mb-4">Fully Automated Batching Plants</h3>
              <p className="mb-6">
                Our state-of-the-art batching plants ensure precise mixing and consistent quality for every batch of concrete we produce. 
                With mobile and stationary pumps available, we can meet the demands of any construction project, regardless of size or complexity.
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-center">
                  <div className="bg-blue-600 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Computer-controlled mixing</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-600 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Consistent quality</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-600 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>Mobile & stationary pumps</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-600 p-1 rounded-full mr-3">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>High production capacity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
