import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Headline } from "~/components/ui/Headline"; // Adjust the import path
import { SectionWrapper } from "./SectionWrapper";
import { Image } from "@unpic/qwik";
import { twMerge } from "tailwind-merge";
import { Card } from "../ui/Card";
import IconStar from "../icons/IconStar";

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
  "/images/placeholder.png";

  const stepsData = {
    stepsTitle: "Fast, Reliable Locksmith Services in Just a Few Steps",
    items: [
      {
        title: "Step 1: Contact Us",
        description:
          "Locked out or need a security upgrade? Call us or book an appointment online, and our expert locksmiths will be on their way.",
        icon: IconStar,
      },
      {
        title: "Step 2: Assessment & Quote",
        description:
          "Our team evaluates your situation—whether it's a lockout, key replacement, or security installation—and provides a transparent, upfront quote.",
        icon: IconStar,
      },
      {
        title: "Step 3: Professional Service",
        description:
          "We quickly and efficiently handle your locksmith needs, ensuring top-quality security solutions for your home, business, or vehicle.",
        icon: IconStar,
      },
      {
        title: "Ready! You're Secure",
        description:
          "With your locks fixed, keys replaced, or security upgraded, you can rest easy knowing you're in safe hands with AdeptLock.",
        icon: IconStar,
      },
    ],
    image: {
      src: sideImg,
      alt: "Locksmith service process",
    },
  };

  const { stepsTitle, items, image } = stepsData;

export default component$((props: Props) => {
  const { id, title = "", subtitle = "", highlight = "",  classes = {}, isDark } = props;


  
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
    <SectionWrapper id={id} isDark={isDark} classes={classes}>
      <Headline title={title} subtitle={subtitle} highlight={highlight} classes={classes?.headline} />
      <Card.Root>
    <div class="row-gap-10 grid gap-6 md:grid-cols-2">
         <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
           {title && <h2 class="font-heading mb-8 text-3xl font-bold lg:text-4xl">{stepsTitle}</h2>}
           {Array.isArray(items) &&
             items.length &&
             items.map(({ title, description, icon: Icon }, index) => (
               <div
                 key={`item-steps-${index}`}
                 class={twMerge(
                   "flex",
                   "transition-all duration-500 ease-out",
                   isVisible.value ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                 )}
                 style={{ transitionDelay: `${index * 100}ms` }}
               >
                 <div class="mr-4 flex flex-col items-center">
                   <div>
                     {index !== items.length - 1 ? (
                       <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                         {typeof Icon !== "undefined" ? (
                           <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                         ) : (
                           <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                         )}
                       </div>
                     ) : (
                       <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                         {typeof Icon !== "undefined" ? (
                           <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                         ) : (
                           <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                         )}
                       </div>
                     )}
                   </div>
                   {index !== items.length - 1 && (
                     <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>
                   )}
                 </div>
                 <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                   {title && (
                     <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>
                   )}
                   {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                 </div>
               </div>
             ))}
         </div>
         <div class="relative">
           {typeof image !== "undefined" && (
             <Image
               layout="constrained"
               src={image.src}
               width={532}
               height={704}
               alt={image.alt}
               class="inset-0 w-full rounded-md bg-gray-500 hidden sm:block object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
               breakpoints={[320, 480, 640, 1024]}
             />
           )}
                {typeof image !== "undefined" && (
             <Image
               layout="constrained"
               src={image.src}
               width={400}
               height={400}
               alt={image.alt}
               class="inset-0 w-full rounded-md bg-gray-500 block sm:hidden mx-auto object-cover object-top shadow-lg dark:bg-slate-700 md:absolute md:h-full"
               breakpoints={[320, 480, 640, 1024]}
             />
           )}
         </div>
       </div>
      </Card.Root>
    </SectionWrapper>
  );
});