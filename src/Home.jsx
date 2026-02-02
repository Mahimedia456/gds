// src/Home.jsx
import Header from "./components/ui/Header.jsx";
import Hero from "./components/ui/Hero.jsx";
import Projects from "./components/ui/Projects.jsx";
import VideoModal from "./components/ui/VideoModal.jsx";
import Footer from "./components/ui/Footer.jsx";

import AboutUs from "./components/sections/AboutUs.jsx";
import OurServices from "./components/sections/OurServices.jsx";
import WhatWeDo from "./components/sections/WhatWeDo.jsx";
import OurFeatures from "./components/sections/OurFeatures.jsx";
import OurPricing from "./components/sections/OurPricing.jsx";
import OurFaqs from "./components/sections/OurFaqs.jsx";
import OurTestimonials from "./components/sections/OurTestimonials.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <AboutUs />
        <OurServices />
        <WhatWeDo />
        <OurFeatures />
        <OurPricing />
        <Projects />
        <OurFaqs />
        <OurTestimonials />
      </main>
      <Footer />
      <VideoModal />
    </>
  );
}
