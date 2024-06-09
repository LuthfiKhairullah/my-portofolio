import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import Certifications from '@/components/Certifications/page';
import Projects from '@/components/Projects/page';
import Skills from '@/components/Skills/page';
import Footer from '@/components/Footer/page';

export default function FirstPage() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Certifications></Certifications>
      <Projects></Projects>
      <Skills></Skills>
      <Footer></Footer>
    </>
  );
}
