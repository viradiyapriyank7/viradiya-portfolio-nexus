import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern technologies for optimal performance.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["React", "Node.js", "MySQL", "Stripe"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and wishlist",
      "Secure payment processing",
      "Order tracking and history",
      "Admin dashboard"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team features, and analytics dashboard. Perfect for remote teams and project tracking.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["Next.js", "Supabase", "TypeScript"],
    features: [
      "Real-time collaboration",
      "Task assignment and tracking",
      "Project timeline visualization",
      "Team chat integration",
      "File attachments",
      "Analytics and reports"
    ]
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive social media management dashboard with analytics, post scheduling, and engagement tracking across multiple platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["React", "NestJS", "PostgreSQL"],
    features: [
      "Multi-platform integration",
      "Post scheduling",
      "Analytics and insights",
      "Engagement tracking",
      "Content calendar",
      "Team collaboration"
    ]
  },
  {
    id: 4,
    title: "Portfolio Website Builder",
    description: "A drag-and-drop portfolio builder for creatives with customizable templates, animations, and SEO optimization built-in.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    tech: ["React", "MongoDB", "Express"],
    features: [
      "Drag-and-drop editor",
      "Custom templates",
      "Animation library",
      "SEO optimization",
      "Custom domain support",
      "Analytics integration"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/portfolio">
              <Button>Back to Portfolio</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <Link to="/portfolio">
            <Button variant="ghost" className="mb-8 hover:translate-x-[-4px] transition-transform">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="group">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Live Demo
                </a>
              </Button>
              <Button variant="outline" asChild className="group">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Code
                </a>
              </Button>
            </div>

            <div className="rounded-xl overflow-hidden shadow-[var(--shadow-glow)] mb-12">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ProjectDetail;
