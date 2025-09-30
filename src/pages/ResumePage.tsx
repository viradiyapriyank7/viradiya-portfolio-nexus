import Resume from "@/components/Resume";
import { PageTransition } from "@/components/PageTransition";

const ResumePage = () => {
  return (
    <PageTransition>
      <section className="min-h-screen py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Resume</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-[hsl(var(--highlight))] mx-auto mb-8" />
          </div>
          <Resume />
        </div>
      </section>
    </PageTransition>
  );
};

export default ResumePage;
