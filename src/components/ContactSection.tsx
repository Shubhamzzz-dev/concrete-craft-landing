
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Form submission would go here in a real implementation
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <h2 className="section-title text-center">Contact Us</h2>
        <p className="section-subtitle text-center mx-auto">
          Reach out to discuss your project requirements or request a quote for our Ready Mixed Concrete solutions.
        </p>
        
        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-concrete-800 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-concrete-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-concrete-800 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-concrete-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-concrete-800 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-concrete-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-concrete-800 mb-1">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-concrete-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Project Type</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="commercial">Commercial Building</option>
                    <option value="residential">Residential Complex</option>
                    <option value="government">Government Project</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-concrete-800 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-concrete-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white w-full md:w-auto">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          
          <div className="bg-concrete-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-concrete-800 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-concrete-800 mb-1">Location</p>
                  <p className="text-concrete-600">Mumbai, Maharashtra, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-concrete-800 mb-1">Phone</p>
                  <a href="tel:+919876543210" className="text-concrete-600 hover:text-blue-700">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-concrete-800 mb-1">Email</p>
                  <a href="mailto:info@ruprabhaindustries.com" className="text-concrete-600 hover:text-blue-700">
                    info@ruprabhaindustries.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-blue-700 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-concrete-800 mb-1">Business Hours</p>
                  <p className="text-concrete-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-md border border-blue-100">
              <h4 className="font-medium text-blue-800 mb-2">Request a Quote</h4>
              <p className="text-concrete-600 text-sm mb-4">
                Need a detailed quote for your project? Contact our sales team directly.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-700 hover:bg-blue-700 hover:text-white"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call for Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
