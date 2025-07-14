import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Code, Bot, Cpu } from "lucide-react";
import openaiLogo from "@/assets/openai-logo.png";
import nextJsLogo from "@/assets/next-js-logo.png";
import vapiLogo from "@/assets/vapi-logo.png";
import n8nLogo from "@/assets/n8n-logo.png";
import elevenLabsLogo from "@/assets/eleven-labs-logo.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>
      
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-float-3d opacity-20">
          <div className="w-16 h-16 border border-primary/30 rounded-lg backdrop-blur-sm bg-card/10 flex items-center justify-center">
            <Bot className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float-3d opacity-20" style={{animationDelay: '2s'}}>
          <div className="w-12 h-12 border border-secondary/30 rounded-lg backdrop-blur-sm bg-card/10 flex items-center justify-center">
            <Cpu className="w-6 h-6 text-secondary" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float-3d opacity-20" style={{animationDelay: '4s'}}>
          <div className="w-14 h-14 border border-accent/30 rounded-lg backdrop-blur-sm bg-card/10 flex items-center justify-center">
            <Code className="w-7 h-7 text-accent" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">

          {/* Main Headline */}
          <div className="animate-slide-up">
            <h1 className="text-hero mb-6 leading-none">
              <span className="text-white">We Build </span>
              <span className="text-gradient-primary text-glow-primary animate-text-glow-pulse">AI Tools</span>
              <br />
              <span className="text-white">That </span>
              <span className="text-gradient-secondary text-glow-secondary">Make you Money</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
              Custom AI systems delivered in {" "}
              <span className="text-accent font-bold">30 days.</span>{" "}
              No fluff. Just results
            </div>
          </div>
          
          
          {/* CTA Button */}
          <div className="flex justify-center items-center animate-fade-in mb-20">
            <a href="#book-consultation" className="inline-flex">
              <Button variant="hero" size="xl" className="group">
                <Phone className="w-5 h-5" />
                Book Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
          
          {/* Tech Stack */}
          <div className="animate-scale-in">
            <div className="text-center mb-8">
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                
                {/* OpenAI */}
                <div className="flex items-center justify-center h-16 md:h-20 transition-all duration-300 hover:scale-110">
                  <img 
                    src={openaiLogo} 
                    alt="OpenAI" 
                    className="h-12 md:h-12 w-auto object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                
                {/* Next.js */}
                <div className="flex items-center justify-center h-16 md:h-20 transition-all duration-300 hover:scale-110">
                  <img 
                    src={nextJsLogo} 
                    alt="Next.js" 
                    className="h-25 md:h-28 w-auto object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                
                {/* Vapi */}
                <div className="flex items-center justify-center h-16 md:h-20 transition-all duration-300 hover:scale-110">
                  <img 
                    src={vapiLogo} 
                    alt="Vapi" 
                    className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                
                {/* n8n */}
                <div className="flex items-center justify-center h-16 md:h-20 transition-all duration-300 hover:scale-110">
                  <img 
                    src={n8nLogo} 
                    alt="n8n" 
                    className="h-12 md:h-14 w-auto object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                
                {/* ElevenLabs */}
                <div className="flex items-center justify-center h-16 md:h-20 transition-all duration-300 hover:scale-110">
                  <img 
                    src={elevenLabsLogo} 
                    alt="ElevenLabs" 
                    className="h-12 md:h-12 w-auto object-contain brightness-0 invert"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-section-dark to-transparent" />
      
      {/* Side Glows */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
    </section>
  );
}