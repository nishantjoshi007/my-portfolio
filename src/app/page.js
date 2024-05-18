import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementSection";

export default function Home() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Navbar/>
    <HeroSection/>
    <AboutSection/>
    <ProjectsSection/>
    <EmailSection/>
    <AchievementsSection/>
    <Footer/>
    </main>
  );
}
