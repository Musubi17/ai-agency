import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What if I don't have a website?",
    answer: "No problem. Most AI solutions can work through phone calls, text messages, or even simple landing pages. We'll figure out the best way to deploy your AI based on how your customers actually prefer to interact with you."
  },
  {
    question: "What if I don't know what I need?",
    answer: "That's exactly why we start with a discovery call. I'll ask you about your biggest time-wasters and pain points, then suggest what AI can realistically help with. Sometimes the answer is 'start with this simple automation' rather than jumping into complex AI."
  },
  {
    question: "How long does it take?",
    answer: "Most projects are delivered in 2-4 weeks. Simple chatbots can be live in a week, while custom AI models might take a month. I always build a working prototype first so you can see progress within days."
  },
  {
    question: "Do I need to understand AI to use this?",
    answer: "Absolutely not. I handle all the technical stuff. You just need to know your business. I'll build it so it works exactly like having a really smart employee—no AI jargon required."
  },
  {
    question: "What if it doesn't work for my business?",
    answer: "I only take on projects where I'm confident AI will help. If during our discovery call I don't think AI is right for you yet, I'll tell you straight up and suggest what to focus on first. No wasted time or money."
  },
  {
    question: "How much does it cost?",
    answer: "Projects typically range from $2,000 for simple chatbots to $15,000 for complex custom models. Most small businesses find their AI pays for itself within 2-3 months through time savings or new revenue. We'll discuss exact costs after understanding your needs."
  }
];

export default function FAQSection() {
  return (
    <section className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(280, 10%, 12%) 0%, hsl(220, 8%, 10%) 100%)'
    }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-section-title mb-6">
            <span className="text-white">FAQ </span>
            {/* <span className="text-gradient-primary">Everyone</span> */}
            {/* <br /> */}
            {/* <span className="text-gradient-accent">Asks</span> */}
          </h2>
          
         
        </div>
        
        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`
                  card-glass border-2 border-primary/20 hover:border-primary/40 
                  rounded-2xl overflow-hidden group
                  transition-all duration-500 hover:scale-[1.02]
                  animate-slide-up
                  hover:shadow-[0_20px_40px_-12px_hsl(var(--primary)/0.3)]
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="
                  text-left text-white hover:text-primary font-semibold 
                  px-8 py-6 text-lg
                  transition-all duration-300
                  group-hover:bg-primary/5
                  [&[data-state=open]]:text-primary
                  [&[data-state=open]]:bg-primary/5
                ">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="
                  text-muted-foreground px-8 pb-6 leading-relaxed text-base
                  border-t border-border/30
                  transition-all duration-300
                ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        

      </div>
    </section>
  );
}