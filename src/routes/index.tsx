import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";
import Hero from "~/components/widgets/Hero";


import ServiceCarousel from "~/components/widgets/ServiceCarousel";
import Steps from "~/components/widgets/Steps";




export default component$(() => {
  return (
    <>
  
      <Hero />
      <div class="bg-white h-2"></div>
         <Steps      
      isDark 
      id="steps"
  title="UPCOMING EVENTS"
        items={[]} />
<ServiceCarousel/>
      {/* <ServicesX
        id="services"
        highlight="Upcoming Events & Classes"
        title="Classes & Workshops"
        subtitle="From stunning design to seamless development and strategic branding — we build digital solutions that make an impact."
        items={[]} /> */}

         
 {/*
<Features
id="features-grid"
highlight="Core Services"
title="Creative, Code, and Strategy—All in One Studio"
subtitle="We bring brands to life through custom design, seamless development, and strategic positioning—built to engage and convert."

items={[
  {
    title: "Custom Web Design",
    description:
      "Tailored, on-brand design systems that balance aesthetics with usability—built to communicate clearly and convert consistently.",
    icon: IconRocket, // Swap with a design-related icon
  },
  {
    title: "High-Performance Development",
    description:
      "Fast, scalable, and future-proof websites built with modern frameworks like Qwik, React, and Next.js. Built to grow as you do.",
    icon: IconRocket, // Swap with a dev-related icon
  },
  {
    title: "Brand Strategy & Identity",
    description:
      "We help you define your brand’s voice, visuals, and vibe—from logos and style guides to full positioning strategies.",
    icon: IconRocket, // Swap with a branding-related icon
  },
  {
    title: "Responsive & Accessible Design",
    description:
      "Fluid layouts and inclusive UX tailored for every screen size and every user—because good design works for everyone.",
    icon:IconRocket, // Responsive-friendly icon
  },
  {
    title: "Conversion-Focused UX",
    description:
      "Every interaction is intentional. We design user journeys that drive action—whether it’s clicks, signups, or sales.",
    icon: IconRocket, // Conversion-focused icon
  },
  {
    title: "SEO & Performance Optimization",
    description:
      "From metadata to Core Web Vitals, we make sure your site loads fast, ranks well, and reaches the right people.",
    icon: IconRocket, // Performance-related icon
  },
]}/> */}




{/*     
           <FAQ

        title="Frequently Asked Questions"
        highlight="FAQs"
  
      />
   
      <Contact
    
      id="services"
      highlight="Contact Us"
      title="Get In Touch"
      subtitle="Request a quote or book a free consultations today!."
      items={[]} /> */}

      
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
