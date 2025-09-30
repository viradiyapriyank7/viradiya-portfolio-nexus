import Contact from "@/components/Contact";
import { PageTransition } from "@/components/PageTransition";

const ContactPage = () => {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-8" />
            <p className="text-muted-foreground text-lg">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>
          <Contact />
        </div>
      </section>
    </PageTransition>
  );
};

export default ContactPage;
