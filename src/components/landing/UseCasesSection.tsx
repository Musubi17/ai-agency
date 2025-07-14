import { Card } from "@/components/ui/card";
import { Scissors, Stethoscope, ShoppingBag, Home, Car, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Scissors,
    business: "Salon Owner",
    useCase: "Automates bookings with a voice assistant",
    details: "Customers call anytime to book, reschedule, or cancel. The AI knows your availability, prices, and can handle special requests.",
    benefit: "No more missed calls = no more missed revenue"
  },
  {
    icon: ShoppingBag,
    business: "E-commerce Store",
    useCase: "Smart product recommendations",
    details: "AI that actually understands what customers want based on their browsing and purchase history, not just what's popular.",
    benefit: "Higher average order value without being pushy"
  },
  {
    icon: Stethoscope,
    business: "Medical Practice",
    useCase: "Patient intake and appointment scheduling",
    details: "AI handles routine questions, collects symptoms, and schedules appropriate appointment types with the right providers.",
    benefit: "Staff focus on patient care, not paperwork"
  },
  {
    icon: Home,
    business: "Real Estate Agent",
    useCase: "Property matching and lead qualification",
    details: "AI chats with potential buyers, understands their needs, and only sends you qualified leads who are actually ready to buy.",
    benefit: "Spend time showing houses, not filtering tire-kickers"
  },
  {
    icon: Car,
    business: "Auto Shop",
    useCase: "Service scheduling and diagnostics",
    details: "Customers describe their car problems to an AI that asks the right questions and schedules the appropriate service time.",
    benefit: "Better diagnosis, happier customers, fuller schedule"
  },
  {
    icon: GraduationCap,
    business: "Online Course Creator",
    useCase: "Personalized learning assistant",
    details: "AI tutors that adapt to each student's learning style, answer questions 24/7, and identify where students get stuck.",
    benefit: "Higher completion rates, better reviews, premium pricing"
  }
];

export default function UseCasesSection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(220, 8%, 14%) 0%, hsl(280, 10%, 12%) 100%)'
    }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-section-title text-foreground mb-4">
            How Real Businesses Use AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These aren't futuristic scenarios. These are things you can implement next month.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card key={index} className="p-6 border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {useCase.business}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {useCase.useCase}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {useCase.details}
                </p>
                
                <div className="text-xs font-medium text-foreground bg-primary/5 rounded-lg px-3 py-2">
                  💡 {useCase.benefit}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Don't see your industry? <span className="text-primary font-medium cursor-pointer hover:underline">Let's talk about your specific needs.</span>
          </p>
        </div>
      </div>
    </section>
  );
}