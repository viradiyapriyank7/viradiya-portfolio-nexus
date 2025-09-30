import { Code2, Database, Globe, Server } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const skills = [
  { name: "HTML", icon: Code2, color: "text-orange-500", level: 95 },
  { name: "CSS", icon: Code2, color: "text-blue-500", level: 90 },
  { name: "JavaScript", icon: Code2, color: "text-yellow-500", level: 92 },
  { name: "React", icon: Globe, color: "text-cyan-500", level: 90 },
  { name: "Next.js", icon: Globe, color: "text-foreground", level: 85 },
  { name: "MySQL", icon: Database, color: "text-blue-600", level: 88 },
  { name: "Supabase", icon: Database, color: "text-green-500", level: 82 },
  { name: "MERN Stack", icon: Server, color: "text-green-600", level: 87 },
  { name: "NestJS", icon: Server, color: "text-red-500", level: 80 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">Technologies I work with</p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${skill.color}`} />
                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 0.1}s`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
