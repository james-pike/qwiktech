import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { SectionWrapper } from "./SectionWrapper";

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




export default component$((props: Props) => {
  const { id, isDark } = props;



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