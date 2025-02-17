import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import CEOSection from "@/components/CEOSection";
import TeamSection from "@/components/TeamSection";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <Navbar />
      <div className="pt-16">
        <AboutSection />
        <CEOSection />
        <MissionSection />
        <TeamSection />
        <Footer />
      </div>
    </div>
  );
};

export default About;