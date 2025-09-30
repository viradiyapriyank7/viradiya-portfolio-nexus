import FAQ from "@/components/FAQ";
import { PageTransition } from "@/components/PageTransition";

const FAQPage = () => {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about my services and work process.
            </p>
          </div>
          <FAQ />
        </div>
      </section>
    </PageTransition>
  );
};

export default FAQPage;
