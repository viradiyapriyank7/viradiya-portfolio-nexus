import Services from "@/components/Services";
import { PageTransition } from "@/components/PageTransition";

const ServicesPage = () => {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Services</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional web development services tailored to your business needs.
            </p>
          </div>
          <Services />
        </div>
      </section>
    </PageTransition>
  );
};

export default ServicesPage;
