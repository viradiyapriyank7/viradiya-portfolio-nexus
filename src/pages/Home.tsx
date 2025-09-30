import Hero from "@/components/Hero";
import { PageTransition } from "@/components/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
};

export default Home;
