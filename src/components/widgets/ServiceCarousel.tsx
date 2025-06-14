import { component$, PropsOf, useContextProvider, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { Carousel, Progress } from '@qwik-ui/headless';
import { Card } from '../ui/Card'; // Adjust the import path as needed
import { DarkContext } from '~/DarkContext';

import { Button } from '../ui/Button';

export const CarouselProgress = component$((props: PropsOf<typeof Progress.Root>) => {
  return (
    <Progress.Root {...props} class="progress" style={{ marginBottom: '2rem' }}>
      <Progress.Indicator class="progress-indicator bg-blue-50" />
    </Progress.Root>
  );
});



const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern web applications',
       image: '/images/clay.jpg'
  },
  {
    title: 'Mobile Apps',
    description: 'Creating native and cross-platform mobile solutions',
       image: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user interfaces',
      image: '/images/hero1.png'
  },
  {
    title: 'Cloud Services',
    description: 'Implementing scalable cloud infrastructure',
       image: '/images/hero1.png'
  },
  {
    title: 'Cloud Services2',
    description: 'Implementing scalable cloud infrastructure',
      image: '/images/hero1.png'
  },
  {
    title: 'Cloud Services3',
    description: 'Implementing scalable cloud infrastructure',
       image: '/images/hero1.png'
  }
];

const serviceData = [
  {
    title: "Clay Labryinth",
    subtitle: "Creative and Functional Design",

    description: "Our innovative design services use Figma, Adobe XD, and Sketch to craft custom UI/UX, interactive prototypes, and branding assets tailored to your vision.",
    image: "/images/clay",
    features: [
      "Custom UI/UX Design",
      "Interactive Prototyping",
      "Branding Asset Creation"
    ],
    projectDetails: {
      startingPrice: "$3,500",
      timeline: "4-6 weeks"
    },
    ctaText: "Book Class"
  },
  //   {
  //   title: "Open Like A Bowl",
  //   subtitle: "Creative and Functional Design",

  //   description: "Our innovative design services use Figma, Adobe XD, and Sketch to craft custom UI/UX, interactive prototypes, and branding assets tailored to your vision.",
  //   image: "/images/summer",
  //   features: [
  //     "Custom UI/UX Design",
  //     "Interactive Prototyping",
  //     "Branding Asset Creation"
  //   ],
  //   projectDetails: {
  //     startingPrice: "$3,500",
  //     timeline: "4-6 weeks"
  //   },
  //   ctaText: "Book Open Like A Bowl"
  // },
  // {
  //   title: "Developmsent",
  //   subtitle: "Robust Web and Software Solutions",

  //   description: "We provide scalable development with React, Qwik, and Next.js, building secure APIs, integrating cloud solutions, and delivering custom software.",
  //   image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png",
  //   features: [
  //     "Full-Stack Development",
  //     "Secure API Integration",
  //     "Cloud-Based Solutions"
  //   ],
  //   projectDetails: {
  //     startingPrice: "$4,000",
  //     timeline: "6-8 weeks"
  //   },
  //   ctaText: "Begin Development"
  // },
  // {
  //   title: "Branding",
  //   subtitle: "Memorable Brand Identities",

  //   description: "We create cohesive branding with logos, color palettes, and style guides, ensuring consistency across platforms and a strong audience connection.",
  //   image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png",
  //   features: [
  //     "Logo and Identity Design",
  //     "Brand Style Guides",
  //     "Platform Consistency"
  //   ],
  //   projectDetails: {
  //     startingPrice: "$2,500",
  //     timeline: "3-5 weeks"
  //   },
  //   ctaText: "Begin Branding"
  // }
];

interface Props {
  isDark?: boolean;
}

export default component$((props: Props) => {
  const { isDark = false } = props; 
  useContextProvider(DarkContext, isDark);// Default to false if not provided

 

  const isDraggable = useSignal(true); // Signal to manage draggable state

  // Run this task on the client when the component becomes visible
  useVisibleTask$(() => {
    const updateDraggable = () => {
      // Use Tailwind's default md breakpoint (768px) as the threshold
      if (window.innerWidth >= 768) {
        isDraggable.value = true; // Disable dragging on desktop
      } else {
        isDraggable.value = true; // Enable dragging on mobile
      }
    };

    // Initial check
    updateDraggable();

    // Listen for window resize events
    window.addEventListener('resize', updateDraggable);

    // Cleanup
    return () => window.removeEventListener('resize', updateDraggable);
  });

  return (
    
    <Carousel.Root class="carousel-root px-4" gap={20} slidesPerView={1}  draggable={isDraggable.value} rewind sensitivity={{
      touch: 2.4,
    }} >
 
      <Carousel.Scroller class="carousel-scroller py-6">
        {services.map((service) => (
          <Carousel.Slide
            style={{ flexBasis: '300px' }}
            key={service.title}
            class="carousel-slide w-full"
          >
            <Card.Root>
              <Card.Image 
                src={service.image} 
                alt={service.title}
                style={{ height: '150px' ,}} // Optional: adjuqst height as needed
              />
             {serviceData.map((service) => (
                     <div class="pb-6 h-full">
                       <Card.Header>
                         <Card.Title class="text-2xl md:text-3xl md:pt-4 font-bold text-gray-900 dark:text-white">
                           {service.title} 
                         </Card.Title>
                         <Card.Description class="text-gray-600 dark:text-gray-300">
                           {service.description}
                         </Card.Description>
                       </Card.Header>
                       <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
                         {/* Left Column: Image */}
                         {/* <div class="w-full h-24 md:h-64">
                           <img
                             src={service.image}
                             alt={`${service.title} illustration`}
                             class="w-full h-full rounded-none shadow-md object-cover"
                           />
                         </div> */}
                         {/* Right Column: Features, Project Details, CTA */}
                         <div class="w-full space-y-4">
                           {/* <div class="space-y-2">
                             <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                               Key Features
                             </Label>
                             <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                               {service.features.map((feature: string | number | boolean | Function | RegExp | JSXChildren[] | Promise<JSXChildren> | Signal<JSXChildren> | JSXNode<unknown> | null | undefined, idx: string | number | null | undefined) => (
                                 <li key={idx} class="flex items-center gap-2">
                                   <span class="text-green-500">✓</span> {feature}
                                 </li>
                               ))}
                             </ul>
                           </div> */}
                           {/* <div class="space-y-2">
                             <Label class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                               Project Details
                             </Label>
                             <div class="grid grid-cols-2 gap-2">
                               <Input
                                 value={service.projectDetails.startingPrice}
                                 readOnly
                                 class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                                 placeholder="Starting Price"
                               />
                               <Input
                                 value={service.projectDetails.timeline}
                                 readOnly
                                 class="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                                 placeholder="Timeline"
                               />
                             </div>
                           </div> */}
                           <Button class=" bg-secondary hover:bg-blue-700 text-white font-semibold py-3 rounded-lg">
                             {service.ctaText}
                           </Button>
                         </div>
                       </div>
                     </div>
                 ))}
            </Card.Root>
          </Carousel.Slide>
        ))}
      </Carousel.Scroller>
      <div class="flex justify-between items-end">
          <Carousel.Pagination class="carousel-pagination  pb-6 flex gap-1 justify-start ">
            {services.map((service) => (
              <Carousel.Bullet
                key={service.title}
                class="carousel-pagination-bullet w-[10px] h-[10px] bg-[#ccc] rounded-sm transition-all duration-300 data-[active]:!bg-primary data-[active]:scale-125"
              />
            ))}
          </Carousel.Pagination>


          <div class="">
        {/* <Carousel.Previous>Prev</Carousel.Previous>
        <Carousel.Next>Next</Carousel.Next> */}
      </div>
      
        </div>
    </Carousel.Root>
  
  );
});