import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconInstagram from "~/components/icons/IconInstagram"
import IconFacebook from "~/components/icons/IconFacebook"
import ToggleTheme from "../common/ToggleTheme";
import { Button } from "../ui/Button";

export default component$(() => {
  const links = [
    {
      title: "About",
      items: [
        { title: "About Us", href: "#" },
        { title: "Reviews", href: "#" },
        { title: "FAQ", href: "#" },
    
     
    
      ],
    },
    {
      title: "Platform",
      items: [
        { title: "Developer API", href: "#" },
        { title: "Partners", href: "#" },
        { title: "Atom", href: "#" },
 
      ],
    },
    {
      title: "Services",
      items: [
        { title: "Docs", href: "#" },
        { title: "Community Forum", href: "#" },
        { title: "Professional Services", href: "#" },
        { title: "Skills", href: "#" },
        { title: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Press", href: "#" },
   
     
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "/" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    // {
    //   label: "Github",
    //   icon: IconGithub,
    //   href: "https://github.com/onwidget/qwind",
    // },
  ];

  return (
    <footer class="border-t bg-card">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
            <div class="mb-2 inline-block font-bold text-xl">
           
                Webdev.ca
             
            </div>
            <div class="text-sm text-gray-600 mb-4 dark:text-gray-400">
            Transform your online presence with custom web design and development services—stunning, fast, and secure websites for your business.
            </div>
            <div class="flex gap-2">
            <Link class="" href={"/contact"}>
              <Button>Get Started Today</Button>
              </Link>
           
            </div>
          </div>
          {links.map(({ title, items }, index) => (
            <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
              <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">{title}</div>
              {Array.isArray(items) && items.length > 0 && (
                <ul class="text-sm">
                  {items.map(({ title, href }, index2) => (
                    <li key={index2} class="mb-2">
                      <Link
                        class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div class="md:flex md:items-center border-t dark:border-gray-700 md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
          <ToggleTheme/>
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
          
            ))}
          </ul>
       
          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            {/* <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
            Made by{" "}
            <a class="text-secondary-800 underline dark:text-gray-200" href="https://onwidget.com/">
              {" "}
              onWidget
            </a>{" "}· All rights reserved. */}
               © {new Date().getFullYear()} Webdev.ca · All rights reserved
            
          </div>
        </div>
      </div>
    </footer>
  );
});
