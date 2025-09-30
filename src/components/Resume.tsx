import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Resume = () => {
  const handleDownload = () => {
    // Placeholder for CV download functionality
    // In production, this would link to an actual PDF file
    alert("CV download will be available soon!");
  };

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 text-center animate-scale-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <FileText size={48} className="text-primary" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
              Download My Resume
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, education, and achievements
              in a detailed PDF resume.
            </p>
            <Button variant="hero" size="lg" onClick={handleDownload}>
              <Download size={20} />
              Download CV
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
