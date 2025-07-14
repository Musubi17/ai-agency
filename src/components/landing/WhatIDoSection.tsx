import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Brain, Zap, ArrowRight, Phone } from "lucide-react";

const services = [
  {
    icon: Mic,
    title: "AI Voice Agents",
    description: "Convert more clients with AI Receptionists. Answer calls 24/7, qualify leads, and book appointments automatically.",
    features: [
      "Answer calls 24/7",
      "Qualify Leads", 
      "Book appointments"
    ],
    accent: "primary"
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Get your idea built within 2-4 weeks. Automate the boring stuff and focus on what actually grows your business.",
    features: [
      "Get more content with no work",
      "Get more 5x leads",
      "Fully automated"
    ],
    accent: "secondary"
  },
  {
    icon: Brain,
    title: "Custom AI Models",
    description: "We've built over 5 AI apps, from chatbots to marketing tools. Purpose-built AI that thinks exactly like your team.",
    features: [
      "Sleek designs",
      "Complete functionality", 
      "Deployed online"
    ],
    accent: "accent"
  }
];

export default function WhatIDoSection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(var(--section-dark)) 0%, hsl(280, 15%, 8%) 100%)'
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">Our </span>
            <span className="text-gradient-primary">Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We leverage state-of-the-art AI to help your business grow.
          </p>
        </div>
        
        {/* Service Cards - 3 in a row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const accentClass = service.accent === 'primary' ? 'primary' : 
                              service.accent === 'secondary' ? 'secondary' : 'accent';
            
            return (
              <Card 
                key={index} 
                className={`
                  relative p-8 bg-card/40 backdrop-blur-sm 
                  border-2 border-${accentClass}/30 hover:border-${accentClass}/60
                  rounded-2xl group transition-all duration-500
                  hover:transform hover:scale-105 hover:-translate-y-2
                  animate-slide-up
                  ${service.accent === 'primary' ? 
                    'hover:shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.4)]' :
                    service.accent === 'secondary' ? 
                    'hover:shadow-[0_20px_40px_-12px_hsl(var(--secondary)/0.4)]' :
                    'hover:shadow-[0_20px_40px_-12px_hsl(var(--accent)/0.4)]'
                  }
                `}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 mx-auto mb-6 rounded-2xl 
                    flex items-center justify-center
                    ${service.accent === 'primary' ? 'bg-primary/20 text-primary' :
                      service.accent === 'secondary' ? 'bg-secondary/20 text-secondary' : 
                      'bg-accent/20 text-accent'}
                  `}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features - Left aligned bulletpoints */}
                  <div className="space-y-3 text-left">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className={`
                          w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                          ${service.accent === 'primary' ? 'bg-primary' :
                            service.accent === 'secondary' ? 'bg-secondary' : 'bg-accent'}
                        `} />
                        <span className="text-sm text-muted-foreground font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <a href="#book-consultation" className="inline-flex">
            <Button variant="hero" size="xl" className="group">
              <Phone className="w-5 h-5" />
              Book Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent" />
    </section>
  );
}