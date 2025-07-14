import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Wrench, Rocket, ArrowRight, Clock } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Strategy Call",
    subtitle: "No sales pitch",
    description: "I analyze your business, identify the highest-impact AI opportunities, and tell you exactly what's possible—and what's not worth building.",
    timeline: "30 min",
    accent: "primary"
  },
  {
    icon: Wrench,
    title: "Rapid Prototype",
    subtitle: "Proof before payment",
    description: "I build a working demo so you can see, touch, and test the solution before committing to full development. No guesswork.",
    timeline: "3-5 days",
    accent: "secondary"
  },
  {
    icon: Rocket,
    title: "Deploy & Scale",
    subtitle: "Built to last",
    description: "Launch the production system, monitor performance, optimize based on real data, and scale as your business grows.",
    timeline: "2-4 weeks",
    accent: "accent"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(220, 10%, 12%) 0%, hsl(280, 12%, 10%) 100%)'
    }}>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
      </div>
      
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-6">
            <span className="text-white">From Idea to </span>
            <span className="text-gradient-primary">Revenue</span>
            <br />
            <span className="text-white">in </span>
            <span className="text-gradient-secondary">30 Days</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No months-long discovery phases. No endless meetings.{" "}
            <span className="text-accent font-semibold">Just fast, focused delivery</span>{" "}
            that gets you results quickly.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-4">
            {steps.map((step, index) => {
              const accentClass = step.accent === 'primary' ? 'primary' : 
                                step.accent === 'secondary' ? 'secondary' : 'accent';
              return (
                <div key={index} className="flex items-center">
                  <div className={`
                    w-3 h-3 rounded-full bg-${accentClass} 
                    shadow-lg shadow-${accentClass}/50
                  `} />
                  {index < steps.length - 1 && (
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent opacity-50 mx-4" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Process Steps - Equal Height Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const accentClass = step.accent === 'primary' ? 'primary' : 
                                step.accent === 'secondary' ? 'secondary' : 'accent';
              
              return (
                <div 
                  key={index} 
                  className="relative animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Equal Height Step Card */}
                  <Card className={`
                    card-glass p-6 text-center group relative overflow-hidden h-full flex flex-col
                    transition-all duration-500
                    hover:transform hover:scale-105 hover:-translate-y-2
                    ${step.accent === 'primary' ? 
                      'hover:shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.4)]' :
                      step.accent === 'secondary' ? 
                      'hover:shadow-[0_20px_40px_-12px_hsl(var(--secondary)/0.4)]' :
                      'hover:shadow-[0_20px_40px_-12px_hsl(var(--accent)/0.4)]'
                    }
                  `}>
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon - Static, no animations */}
                      <div className="mb-6">
                        <div className={`
                          w-16 h-16 bg-${accentClass}/10 rounded-xl mx-auto flex items-center justify-center 
                          border border-${accentClass}/30
                        `}>
                          <Icon className={`w-8 h-8 text-${accentClass}`} />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        
                        <div className={`text-${accentClass} font-semibold mb-4`}>
                          {step.subtitle}
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                          {step.description}
                        </p>
                        
                        {/* Timeline only */}
                        <div className="flex items-center justify-center gap-2">
                          <Clock className={`w-4 h-4 text-${accentClass}`} />
                          <span className={`text-${accentClass} font-semibold text-sm`}>
                            {step.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Bottom CTA Button */}
        <div className="text-center mt-16">
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