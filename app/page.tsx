import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhoWeHelp from "@/components/WhoWeHelp";
import BookMeeting from "@/components/BookMeeting";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <TrustedBy />
      <Services />
      <Stats />
      <WhoWeHelp />
      <BookMeeting />
      <Testimonials />
      <Footer />
    </main>
  );
}
