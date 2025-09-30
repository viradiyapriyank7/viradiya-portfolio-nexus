import { Code2, Database, Layout, Server, Palette, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: <Code2 size={40} />,
      name: "HTML & CSS",
      description: "Semantic markup and modern styling",
    },
    {
      icon: <Layout size={40} />,
      name: "JavaScript",
      description: "ES6+ and modern frameworks",
    },
    {
      icon: <Palette size={40} />,
      name: "React",
      description: "Component-based UI development",
    },
    {
      icon: <Zap size={40} />,
      name: "Next.js",
      description: "Server-side rendering & optimization",
    },
    {
      icon: <Database size={40} />,
      name: "MySQL",
      description: "Relational database management",
    },
    {
      icon: <Database size={40} />,
      name: "Supabase",
      description: "Backend-as-a-Service platform",
    },
    {
      icon: <Server size={40} />,
      name: "MERN Stack",
      description: "MongoDB, Express, React, Node.js",
    },
    {
      icon: <Server size={40} />,
      name: "NestJS",
      description: "Progressive Node.js framework",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">My Skills</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive set of modern web development technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.name}</h3>
              <p className="text-sm text-foreground/60">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
