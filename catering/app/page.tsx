import Howitworks from "@/app/components/Howitworks";
import Testimonials from "@/app/components/Testimonials";
import CTA from "@/app/components/CTA";
import Benefits from "@/app/components/Benefits";
import AboveFoldTwo from "@/app/components/AboveFoldTwo";
import AboveFoldOne from "@/app/components/AboveFold"

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <AboveFoldTwo />
      <Howitworks />
      <Benefits />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
