import Testimonials from "@/components/Testimonials";
import { PageTransition } from "@/components/PageTransition";

const TestimonialsPage = () => {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-8" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What my clients say about working with me.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </PageTransition>
  );
};

export default TestimonialsPage;
