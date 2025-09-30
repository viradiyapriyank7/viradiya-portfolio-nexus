import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "./AnimatedBackground";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const typedTitle = useTypingEffect("Full Stack Web Developer", 100);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <AnimatedBackground />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-glow">
              <span className="gradient-text">Priyank Viradiya</span>
            </h1>
            <div className="h-10 mb-6">
              <p className="text-xl md:text-3xl text-accent font-semibold">
                {typedTitle}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              I am a passionate Full Stack Web Developer with experience building modern, 
              scalable, and user-friendly web applications. I specialize in creating responsive 
              designs, powerful backend systems, and seamless digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                asChild
                className="group shadow-[var(--shadow-accent)] hover:shadow-[var(--shadow-glow)] transition-all hover:scale-105"
              >
                <Link to="/portfolio">
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                asChild
                className="border-primary/50 hover:border-accent hover:scale-105 transition-all"
              >
                <Link to="/contact">
                  Hire Me
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-accent)]"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-accent)]"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@priyankviradiya.com"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-[var(--shadow-accent)]"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-[hsl(var(--highlight))] rounded-full blur-3xl opacity-50 animate-glow"></div>
              <img
                src={profileImage}
                alt="Priyank Viradiya"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-[var(--shadow-glow)] hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
