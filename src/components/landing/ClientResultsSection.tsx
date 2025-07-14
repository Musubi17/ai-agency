import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useState } from "react";
import zaubekPhoto from "@/assets/zaubrek-photo.jpg";
import rosePhoto from "@/assets/rose-photo.jpg";

const testimonials = [
  {
    name: "Zaurbek Tsoroev",
    position: "Founder & CEO",
    company: "The Codebender",
    photo: zaubekPhoto,
    testimonial: "Aleksandr demonstrated strong problem-solving abilities and technical expertise in handling complex AI integrations. He has consistently shown dedication to his work and has been a valuable team member, completing all assigned tasks with proficiency and attention to detail.",
    accent: "primary"
  },
  {
    name: "Raushan-Rose Myrzashova",
    position: "Co-founder",
    company: "CEREBRA",
    photo: rosePhoto,
    testimonial: "During his tenure with us, Aleksandr demonstrated an impressive ability to grasp complex programming concepts and algorithms essential to our company's AI initiatives. He played a crucial role in developing and refining various modules of our software, ensuring its robustness and efficiency.",
    accent: "secondary"
  }
];

export default function TestimonialsSection() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({});

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }));
  };

  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(280, 12%, 10%) 0%, hsl(220, 8%, 14%) 100%)'
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title mb-6">
            <span className="text-white">What People Say </span>
            <span className="text-gradient-primary">About Working</span>
            <br />
            <span className="text-white">With </span>
            <span className="text-gradient-accent">Me</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real feedback from real people who've worked with me on{" "}
            <span className="text-accent font-semibold">actual AI projects</span>.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => {
            const accentClass = testimonial.accent === 'primary' ? 'primary' : 'secondary';
            
            return (
              <Card 
                key={index}
                className={`
                  card-glass p-8 relative overflow-hidden group
                  transition-all duration-500 hover:scale-105 hover:-translate-y-2
                  animate-slide-up
                  ${testimonial.accent === 'primary' ? 
                    'hover:shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.4)]' :
                    'hover:shadow-[0_20px_40px_-12px_hsl(var(--secondary)/0.4)]'
                  }
                `}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6">
                  <Quote className={`w-8 h-8 text-${accentClass}/30`} />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star 
                        key={starIndex} 
                        className={`w-5 h-5 fill-${accentClass} text-${accentClass}`} 
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-white text-lg leading-relaxed mb-8 italic">
                    "{testimonial.testimonial}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    {/* Photo */}
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-full overflow-hidden border-2 border-${accentClass}/50 bg-card`}>
                        {!imageErrors[index] ? (
                          <img 
                            src={testimonial.photo} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(index)}
                          />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-r from-${accentClass} to-${accentClass}-glow rounded-full flex items-center justify-center`}>
                            <span className="text-white font-bold text-lg">
                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                      {/* Subtle glow around photo */}
                      <div className={`absolute inset-0 rounded-full bg-${accentClass}/20 blur-sm -z-10`}></div>
                    </div>

                    {/* Author Details */}
                    <div>
                      <div className="font-bold text-white text-lg">
                        {testimonial.name}
                      </div>
                      <div className={`text-${accentClass} font-semibold text-sm`}>
                        {testimonial.position}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ready to see what we can build together?
          </p>
        </div>
      </div>
    </section>
  );
}