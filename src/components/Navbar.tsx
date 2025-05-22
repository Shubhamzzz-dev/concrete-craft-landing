
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/ed2d4feb-dc50-4279-b785-053dbde7de39.png" 
            alt="Maithili Engineering Logo" 
            className="h-10 mr-2"
          />
          <span className="text-2xl font-bold text-blue-800">
            Maithili <span className={isScrolled ? "text-orange-500" : "text-white"}>Engineering</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`font-medium transition hover:text-orange-500 ${
                    isScrolled ? 'text-concrete-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button 
            onClick={handleQuoteClick} 
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            <Phone className="mr-2 h-4 w-4" />
            <span>Get a Quote</span>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 focus:outline-none ${
              isScrolled ? 'text-concrete-800' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-medium text-concrete-800 hover:text-orange-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button 
                onClick={handleQuoteClick}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>Get a Quote</span>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
