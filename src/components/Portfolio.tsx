import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { soundManager } from "@/utils/soundManager";

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["All", "Web", "App", "Design"];

  const projects = [
    {
      title: "Web design",
      category: "web",
      image: "/placeholder.svg",
    },
    {
      title: "App movil",
      category: "app",
      image: "/placeholder.svg",
    },
    {
      title: "Brand design",
      category: "design",
      image: "/placeholder.svg",
    },
    {
      title: "Web development",
      category: "web",
      image: "/placeholder.svg",
    },
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground text-lg">Most recent work</p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {filters.map((filter) => (
            <Button
              key={filter}
              onClick={() => {
                soundManager.playClick();
                setActiveFilter(filter.toLowerCase());
              }}
              variant={activeFilter === filter.toLowerCase() ? "default" : "ghost"}
              className={
                activeFilter === filter.toLowerCase()
                  ? "btn-glass"
                  : "glass"
              }
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-strong glass-hover rounded-3xl overflow-hidden group cursor-pointer shadow-2xl relative"
              onClick={() => soundManager.playClick()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 relative z-20 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 p-0 h-auto group"
                >
                  Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
