import React, { useEffect } from "react";

export default function BookConsultationSection() {
  useEffect(() => {
    // Загружаем скрипт Cal.com после монтирования компонента
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://app.cal.com"});
      
      Cal.ns["30min"]("inline", {
        elementOrSelector:"#my-cal-inline-30min",
        config: {"layout":"month_view","theme":"dark"},
        calLink: "aleksandr-balkhanov-ldkuvx/30min",
      });
      
      Cal.ns["30min"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});
    `;
    
    document.head.appendChild(script);
    
    // Очищаем скрипт при демонтировании
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="book-consultation" className="py-32 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, hsl(220, 8%, 14%) 0%, hsl(280, 10%, 12%) 100%)'
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
            <span className="text-white">Book Your </span>
            <span className="text-gradient-accent">Consultation</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into reality. Schedule a free consultation with our team today.
          </p>
        </div>
        
        {/* Calendar Container */}
        <div className="max-w-6xl mx-auto">
          <div className="card-glass p-6 rounded-2xl border-glow">
            <div 
              id="my-cal-inline-30min"
              className="w-full min-h-[600px] rounded-xl overflow-hidden"
              style={{
                background: 'transparent',
                border: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 