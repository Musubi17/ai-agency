import { Card } from "@/components/ui/card";
import { CheckCircle, User, Code, Target, Zap, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
import alexPhoto from "@/assets/alex-photo.jpg";

const highlights = [
  {
    icon: Code,
    title: "3+ Years in Production",
    description: "I build systems that handle real traffic, real money, real business."
  },
  {
    icon: User,
    title: "Direct Access to Builder",
    description: "No account managers. No middlemen. You work directly with the person who writes the code."
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description: "Every line of code I write has one goal: make your business more profitable."
  },
  {
    icon: Shield,
    title: "Bulletproof Guarantee",
    description: "AI Engineer who speaks both code and human"
  }
];

export default function WhyMeSection() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(280, 15%, 8%) 0%, hsl(220, 10%, 12%) 100%)'
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="animate-slide-up">
            <h2 className="text-section-title mb-6">
              <span className="text-white">I'm Not Your Typical </span>
              <span className="text-gradient-accent">AI Agency</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              No sales teams. No project managers. No bullshit.{" "}
              <span className="text-accent font-bold">Just me building systems that work.</span>
            </p>
            
            <div className="space-y-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-6 animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary/30 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Content - Founder Card with Real Photo */}
          <div className="animate-scale-in">
            <Card className="card-glass p-10 border-glow relative overflow-hidden group">
              <div className="relative z-10 text-center">
                {/* Real Photo with Circular Frame - BIGGER SIZE */}
                <div className="relative mx-auto mb-8">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-primary via-secondary to-accent p-1 bg-gradient-to-r from-primary via-secondary to-accent">
                    <div className="w-full h-full rounded-full overflow-hidden bg-card">
                      {!imageError ? (
                        <img 
                          src={alexPhoto} 
                          alt="photo of founder" 
                          className="w-full h-full object-cover"
                          onError={() => setImageError(true)}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
                          <User className="w-24 h-24 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Subtle glow effect around photo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl -z-10 animate-pulse"></div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-2xl font-bold text-white mb-6 leading-tight">
                  AI Engineer who speaks both{" "}
                  <span className="text-gradient-primary">code and human</span> 
                  <br />
                </blockquote>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Every project I take on has to pass one brutal test: will this actually make your business more profitable? If the answer isn't a resounding yes, I'll tell you to spend your money elsewhere.
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">3+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">5+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent mb-1">$100K+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide">Generated</div>
                  </div>
                </div>
                
                {/* Signature */}
                <div className="border-t border-border/50 pt-6">
                  <p className="font-bold text-white text-lg">Aleksandr Balkhanov</p>
                  <p className="text-primary text-sm font-medium">AI Software Engineer</p>
                </div>
              </div>
            </Card>
          </div>
          
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-transparent" />
    </section>
  );
}