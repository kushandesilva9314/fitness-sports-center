import HeroSection from "@/components/hero";
import AboutSection from "@/components/about";
import ServiceSection from "@/components/services";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";


export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <Footer />  
    </>
  );
}