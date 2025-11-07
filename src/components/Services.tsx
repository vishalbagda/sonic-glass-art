import { Button } from "@/components/ui/button";
import { Layout, Code, PenTool, ArrowRight } from "lucide-react";
import { soundManager } from "@/utils/soundManager";

export const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Web Designer",
      description: "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    },
    {
      icon: Code,
      title: "UI/UX Designer",
      description: "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    },
    {
      icon: PenTool,
      title: "Branding Designer",
      description: "Service with more than 3 years of experience. Providing quality work to clients and companies.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground text-lg">What i offer</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass glass-hover p-8 rounded-3xl space-y-6 group transition-all"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              <Button
                onClick={() => soundManager.playClick()}
                variant="ghost"
                className="text-primary hover:text-primary/80 p-0 h-auto group"
              >
                View More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
