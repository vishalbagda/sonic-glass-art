import { Button } from "@/components/ui/button";
import { Instagram, Dribbble, Github, ChevronDown } from "lucide-react";
import { soundManager } from "@/utils/soundManager";

export const Hero = () => {
  const handleButtonClick = () => {
    soundManager.playClick();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Social links */}
          <div className="hidden lg:flex flex-col gap-6 fixed left-8 top-1/2 -translate-y-1/2">
            <button
              onClick={() => soundManager.playClick()}
              className="p-3 glass glass-hover rounded-xl transition-all"
            >
              <Instagram className="w-5 h-5" />
            </button>
            <button
              onClick={() => soundManager.playClick()}
              className="p-3 glass glass-hover rounded-xl transition-all"
            >
              <Dribbble className="w-5 h-5" />
            </button>
            <button
              onClick={() => soundManager.playClick()}
              className="p-3 glass glass-hover rounded-xl transition-all"
            >
              <Github className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold">
                John Smith <span className="text-4xl">👋</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
              <h2 className="text-3xl lg:text-4xl text-muted-foreground font-light">
                Visual Designer
              </h2>
            </div>

            <p className="text-lg text-muted-foreground max-w-md">
              I'm creative designer based in New York, and I'm very passionate and dedicated to my work.
            </p>

            <Button
              onClick={handleButtonClick}
              size="lg"
              className="btn-glass group"
            >
              Say Hello
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                ✈️
              </span>
            </Button>
          </div>

          {/* Profile Image with Water Border */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 water-border bg-gradient-to-br from-primary via-secondary to-accent opacity-30 blur-sm"></div>
                <div className="absolute inset-2 water-border overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm">
                  <img
                    src="/placeholder.svg"
                    alt="John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 glass rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Scroll down <ChevronDown className="w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  );
};
