
import { useEffect, useRef } from 'react';
import { Shield, Clock, Users, Construction, Check } from "lucide-react";

const WhyChooseUs = () => {
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
  
  const benefits = [
    {
      icon: <Shield className="h-16 w-16 text-blue-600 mb-6" />,
      title: "Industry Expertise",
      description: "With years of experience in the Ready Mix Concrete business, we bring unmatched expertise to every project we undertake."
    },
    {
      icon: <Clock className="h-16 w-16 text-blue-600 mb-6" />,
      title: "Timely Delivery",
      description: "Our fleet of Transit Mixers ensures prompt and reliable delivery of quality concrete to your construction site."
    },
    {
      icon: <Users className="h-16 w-16 text-blue-600 mb-6" />,
      title: "Trusted Partnerships",
      description: "We've built strong relationships with government and private sector clients who rely on our consistent quality."
    },
    {
      icon: <Construction className="h-16 w-16 text-blue-600 mb-6" />,
      title: "Technical Support",
      description: "Our team provides expert guidance and continuous support throughout your construction project."
    }
  ];
  
  return (
    <section id="why-choose-us" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title text-center">Why Choose Us</h2>
          <p className="section-subtitle text-center mx-auto">
            What sets Maithili Engineering apart and makes us the preferred concrete supplier for major infrastructure projects.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 text-center flex flex-col items-center"
              >
                <div className="text-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-concrete-800 mb-4">{benefit.title}</h3>
                <p className="text-concrete-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 relative">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-concrete-800 rounded-lg p-8 text-white h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Setting Industry Standards</h3>
                <p className="mb-6">
                  At Maithili Engineering, we don't just follow industry standards – we help set them. 
                  Our commitment to quality and innovation has established us as a leader in the Ready Mixed Concrete sector.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-orange-500 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Quality-focused production process</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-500 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Regular material testing and verification</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-500 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Adherence to industry specifications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-orange-500 p-1 rounded-full mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <span>Continuous improvement and innovation</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg overflow-hidden h-72 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Concrete pouring at construction site" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
