
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
          Building the Future with Ready Mixed Concrete
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Supplying Quality. Supporting Projects. Setting Industry Standards.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            <Phone className="mr-2 h-5 w-5" />
            Get a Quote
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-800"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,0L60,5.3C120,11,240,21,360,26.7C480,32,600,32,720,32C840,32,960,32,1080,26.7C1200,21,1320,11,1380,5.3L1440,0L1440,60L0,60Z">
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
