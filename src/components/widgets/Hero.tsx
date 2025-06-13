import { component$ } from "@builder.io/qwik";
import { Button } from "../ui/Button";
import { Link } from "@builder.io/qwik-city";


export default component$(() => {
  return (
    <section class="relative overflow-hidden">
      <div class="absolute inset-y-0 right-3/4 z-10  skew-x-[-30deg] bg-primary/10 shadow-xl ring-1 shadow-indigo-600/10 ring-indigo-50 md:-mr-20 lg:-mr-36" aria-hidden="true"></div>

      <div class="grid texture-fixed grid-cols-1 md:grid-cols-2 ">
<img  src="/images/vessel.svg" class="px-4 pt-4 mt-2 h-28 mx-auto "/>
        {/* Text Content */}
        <div class="relative z-10 order-1 md:order-1 flex items-center justify-center px-4 pt-4 pb-10 md:px-8 md:py-0">
          <div class="md:text-left px-2">
            <h1 class="text-5xl font-bold tracking-tighter text-balance text-center sm:text-6xl md:text-6xl lg:text-7xl mb-4  ">
              Earthen Vessels
              {/* <br />  */}
              {/* <Typewriter /> */}
              {/* <br />
                Solutions */}

            </h1>
            <p class="text-xl sm:text-xl md:text-2xl text-muted-foreground text-center  mb-6 max-w-2xl mx-auto md:mx-0  ">
              Here, we gather around clay, to listen deeply to one another, to ourselves, and to the earth as we shape earthen vessels.            </p>

            <div class="grid grid-cols-2 items-center gap-4 px-8 md:px-0 sm:flex-row sm:justify-center md:justify-start ">
              <Link href="/contact" class="w-full sm:w FULL sm:w-auto">
                <Button
                  size="md"
                  class="w-full bg-secondary text-lg relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] before:animate-shimmer"
                >
                  Book
                </Button>
              </Link>
              <Link href="/contact" class="w-full sm:w-auto">
                <Button size="md" class="w-full text-lg">Contact</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Carousel */}
        {/* <div class="relative order-2 px-4 z-20 md:z-0 md:order-2 h-52 sm:h-80 md:h-full opacity-0 animate-[fadeSlideRight_1s_ease-out_0.8s_forwards]">
          <ServiceCarousel />
        </div> */}
      </div>

    </section>
  );
});





{/* LogoClouds */ }
{/* <div class="bg-gradient-to-r from-gray-200 to-gray-50 dark:from-gray-900 dark:to-gray-700 col-span-1 md:col-span-2 flex items-center justify-center py-4 order-3 overflow-hidden">
          <div class="animate-scroll flex">
            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
            <div class="flex shrink-0 px-4">
              <LogoClouds />
            </div>
          </div>
        </div> */}