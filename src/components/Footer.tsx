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
    <footer className="py-12 glass-strong mt-20 shadow-2xl">
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
              className="w-14 h-14 glass-strong glass-hover rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Facebook className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => soundManager.playClick()}
              className="w-14 h-14 glass-strong glass-hover rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Instagram className="w-6 h-6 text-primary" />
            </button>
            <button
              onClick={() => soundManager.playClick()}
              className="w-14 h-14 glass-strong glass-hover rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Twitter className="w-6 h-6 text-primary" />
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
