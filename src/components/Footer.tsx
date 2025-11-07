import { Facebook, Instagram, Twitter } from "lucide-react";
import { soundManager } from "@/utils/soundManager";

export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    soundManager.playClick();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 glass mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Smith</h2>

          <div className="flex justify-center gap-8 flex-wrap">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <button
              onClick={() => soundManager.playClick()}
              className="w-12 h-12 glass glass-hover rounded-xl flex items-center justify-center transition-all"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => soundManager.playClick()}
              className="w-12 h-12 glass glass-hover rounded-xl flex items-center justify-center transition-all"
            >
              <Instagram className="w-5 h-5" />
            </button>
            <button
              onClick={() => soundManager.playClick()}
              className="w-12 h-12 glass glass-hover rounded-xl flex items-center justify-center transition-all"
            >
              <Twitter className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-muted-foreground">
            © Crypticalcoder. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
