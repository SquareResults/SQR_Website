import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import BlogsSection from "@/components/BlogsSection";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <MissionSection />
        <CEOSection />
        <BlogsSection />
      </div>
    </div>
  );
};

export default About;