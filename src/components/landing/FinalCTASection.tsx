import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(220, 8%, 10%) 0%, hsl(280, 15%, 8%) 100%)'
    }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-hero text-white mb-6">
            Let's build something smart.
            <span className="text-primary block text-glow">Together.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to stop doing repetitive tasks and start focusing on what actually grows your business? Let's talk about what AI can do for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button variant="glow" size="xl" className="group">
              <Phone className="w-5 h-5" />
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="hero-outline" size="xl" className="group">
              <Mail className="w-5 h-5" />
              Email Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              Prefer to start with a question?
            </p>
            <p className="text-primary font-medium">
              alex@aiagency.co
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}