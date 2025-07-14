import { Separator } from "@/components/ui/separator";
import { Linkedin, Github, Mail, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/20" style={{
      background: 'linear-gradient(180deg, hsl(280, 15%, 8%) 0%, hsl(0, 0%, 4%) 100%)'
    }}>
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center mb-8">
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-semibold text-foreground mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground justify-center">
                <Mail className="w-4 h-4" />
                <span className="text-sm">musubi17@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground justify-center">
                
                <span className="text-sm">Book a call for immediate response</span>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 AI Agency. Built by one person who actually codes.
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/aleksandr-balkhanov/" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/Musubi17" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="musubi17@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}