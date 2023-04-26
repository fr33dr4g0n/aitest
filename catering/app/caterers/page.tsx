import Howitworks from "@/app/components/Howitworks";
import Testimonials from "@/app/components/Testimonials";
import CTA from "@/app/components/CTA";
import Benefits from "@/app/components/Benefits";
import CatererFold from "@/app/components/CatererFold";
import HowitworksCaterer from "@/app/components/HowitworksForCaterers";

import NavbarForCaterers from "@/app/components/NavbarForCaterers";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarForCaterers />
      <CatererFold />
      <HowitworksCaterer />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
