import Skills from "@/components/Skills";
import { PageTransition } from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20 animate-slide-up">
            <div>
              <img 
                src="/src/assets/profile.jpg" 
                alt="Priyank Viradiya" 
                className="rounded-2xl shadow-[var(--shadow-glow)] w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Full Stack Web Developer</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I am a passionate Full Stack Web Developer with extensive experience in building modern, 
                scalable, and user-friendly web applications. My expertise spans across frontend and backend 
                technologies, enabling me to create seamless digital experiences from concept to deployment.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                With a strong foundation in the MERN stack and experience with cutting-edge frameworks like 
                Next.js and NestJS, I specialize in creating responsive designs, powerful backend systems, 
                and optimized database solutions. I'm committed to writing clean, maintainable code and 
                staying updated with the latest industry trends.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My goal is to transform ideas into reality through elegant code and innovative solutions 
                that drive business success and enhance user experiences.
              </p>
            </div>
          </div>

          <Skills />
        </div>
      </section>
    </PageTransition>
  );
};

export default About;
