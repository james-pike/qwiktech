import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import { SectionWrapper } from "./SectionWrapper";
import { Image } from "@unpic/qwik";
import { twMerge } from "tailwind-merge";
import { Card } from "../ui/Card";
import IconStar from "../icons/IconStar";
import ServiceCarousel from "./ServiceCarousel";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  id?: string;
  title?: any;
  subtitle?: any;
  highlight?: any;
  items: Array<Item>;
  isDark?: boolean;
  classes?: any;
}

const sideImg =
  "/images/steps.webp";

const stepsData = {
  stepsTitle: "Bringing Your Vision to Life in Just a Few Steps",
  items: [
    {
      title: "Step 1: Get in Touch",
      description:
        "Reach out with your idea, whether it’s a brand refresh or a full custom website. We’ll schedule a discovery call to understand your goals and vision.",
      icon: IconStar,
    },
    {
      title: "Step 2: Strategy & Proposal",
      description:
        "We dive into research, define your project scope, and craft a clear, customized proposal—no fluff, just a roadmap built around results.",
      icon: IconStar,
    },
    {
      title: "Step 3: Design & Development",
      description:
        "Our team handles everything from branding and UX to responsive development—building you a modern, high-performing website tailored to your audience.",
      icon: IconStar,
    },
    {
      title: "Step 4: Launch & Support",
      description:
        "After testing and final revisions, we launch your site with confidence. Need help post-launch? We’re here for ongoing support and future updates.",
      icon: IconStar,
    },
  ],
  image: {
    src: sideImg,
    alt: "Web design and development process",
  },
};


const { items, image } = stepsData;

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "", isDark } = props;



  // Signal to track visibility
  const isVisible = useSignal(false);

  // Intersection Observer to trigger animation
  useVisibleTask$(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible.value = true;
          observer.disconnect(); // Disconnect after first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    const element = document.querySelector("#steps");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  });

  return (
    <SectionWrapper id={id} isDark={isDark} bgClass="texture-fixed ">
      {/* <Headline align="left" title={title} subtitle={subtitle} highlight={highlight} classes={{ container: "px-4" }} /> */}
<div class="-mt-6">
       <ServiceCarousel/>
    </div>

    </SectionWrapper>
  );
});