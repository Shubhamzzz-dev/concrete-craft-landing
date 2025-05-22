
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-concrete-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/f459b489-86ff-4a44-950e-193c457eb389.png" 
                alt="Maithili Engineering Logo" 
                className="h-10 mr-2 bg-white p-1 rounded"
              />
              <h3 className="text-2xl font-bold">Maithili Engineering</h3>
            </div>
            <p className="text-concrete-300 mb-6">
              Leading supplier of Ready Mixed Concrete in Mumbai, serving both government and private sector projects with quality materials and technical expertise.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here - using placeholder divs */}
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition">
                <span className="sr-only">Facebook</span>
                <div className="w-4 h-4">FB</div>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition">
                <span className="sr-only">LinkedIn</span>
                <div className="w-4 h-4">LI</div>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 transition">
                <span className="sr-only">Twitter</span>
                <div className="w-4 h-4">TW</div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-concrete-300 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="text-concrete-300 hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#services" className="text-concrete-300 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="#projects" className="text-concrete-300 hover:text-white transition">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-concrete-300 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <span className="text-concrete-300">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-concrete-300 hover:text-white transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@maithiliengineering.com" className="text-concrete-300 hover:text-white transition">
                  info@maithiliengineering.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-concrete-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-concrete-400 mb-4 md:mb-0">
            &copy; {currentYear} Maithili Engineering. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-concrete-400 hover:text-white transition text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-concrete-400 hover:text-white transition text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
