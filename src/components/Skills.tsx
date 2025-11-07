import { CheckCircle2 } from "lucide-react";

export const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: "Basic" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
  ];

  const backendSkills = [
    { name: "PHP", level: "Intermediate" },
    { name: "Node Js", level: "Basic" },
    { name: "Python", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Firebase", level: "Intermediate" },
    { name: "SQL", level: "Intermediate" },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground text-lg">My technical level</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend */}
          <div className="glass-strong p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-3xl"></div>
            <div className="relative">
            </div>
            <h3 className="text-2xl font-bold text-center mb-8">Frontend developer</h3>
            <div className="grid grid-cols-2 gap-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="glass-strong p-8 rounded-3xl space-y-6 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent rounded-3xl"></div>
            <div className="relative">
            </div>
            <h3 className="text-2xl font-bold text-center mb-8">Backend developer</h3>
            <div className="grid grid-cols-2 gap-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.level}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
