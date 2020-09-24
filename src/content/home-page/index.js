import React from "react";
import AboutUs from "./about-us-section";
import Clients from "./clients-section";
import ContactUs from "./contact-us-section";
import IntroductionSection from "./introduction-section";
import Portfolio from "./portfolio-section";
import Services from "./services-section";
import Team from "./team-section";
import Testimonials from "./testimonials-section";
import WhyUs from "./why-us-section";
import PartnerTabForm from "../../partner/partner-tab-form";

const HomePage = () => (
  <>
    <IntroductionSection />
    <main id="main">
      <AboutUs />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Team />
      <Clients />
      <ContactUs />
      <PartnerTabForm />
    </main>
  </>
);

export default HomePage;
