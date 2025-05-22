
import { useEffect, useRef } from 'react';
import { Award, Check, Users, Building } from "lucide-react";

const AboutUs = () => {
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
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div ref={sectionRef} className="animate-on-scroll">
          <h2 className="section-title text-center">About Maithili Engineering</h2>
          <p className="section-subtitle text-center mx-auto">
            A leading supplier of Ready Mixed Concrete in Mumbai, serving both government and private sector projects.
          </p>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mt-12">
            <div className="space-y-6">
              <p className="text-concrete-600">
                Maithili Engineering stands as a pioneer in the Ready Mixed Concrete (RMC) business, 
                delivering superior quality materials that form the foundation of Mumbai's infrastructure. 
                With years of expertise and a commitment to excellence, we have established ourselves 
                as a trusted partner for construction projects of all sizes.
              </p>
              
              <p className="text-concrete-600">
                Our state-of-the-art facilities and technical expertise enable us to provide consistent, 
                high-quality concrete products that meet the most demanding specifications. We take pride 
                in supporting India's growing infrastructure needs with reliable materials and unmatched service.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Quality Certified</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Modern Equipment</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Technical Support</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Timely Delivery</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-concrete-800 mb-1">Pioneer</h3>
                <p className="text-concrete-600">In RMC Business</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-concrete-800 mb-1">50+</h3>
                <p className="text-concrete-600">Satisfied Clients</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-concrete-800 mb-1">Premium</h3>
                <p className="text-concrete-600">Quality Standard</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-concrete-800 mb-1">Reliable</h3>
                <p className="text-concrete-600">Material Supply</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
