import { Button } from "@/components/ui/button";
import { Lightbulb, Briefcase, Headphones } from "lucide-react";
import { soundManager } from "@/utils/soundManager";

export const About = () => {
  const stats = [
    { icon: Lightbulb, label: "Experience", value: "8 + Years" },
    { icon: Briefcase, label: "Completed", value: "48 + Projects" },
    { icon: Headphones, label: "Support", value: "Online 24/7" },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">My introduction</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md aspect-square glass-strong p-8 rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-3xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden glass border-4 border-white/30">
                <img
                  src="/placeholder.svg"
                  alt="About"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-strong glass-hover p-6 rounded-2xl text-center space-y-2 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 mx-auto text-primary" />
                  <h3 className="font-semibold text-foreground">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.value}</p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Frontend developer, I create web pages with UI / UX user interface, 
              I have years of experience and many clients are happy with the projects carried out.
            </p>

            <Button
              onClick={() => soundManager.playClick()}
              size="lg"
              className="btn-glass"
            >
              Download CV 📄
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
