import { component$, useStore } from "@builder.io/qwik";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";
import IconChevronDown from "../icons/IconChevronDown";

import Settings from "./settings";
import { Button } from "../ui/Button";
import MenuModal from "./MenuModal";

export default component$(() => {
  const store = useStore({
    isScrolling: false,
  });

  const { menu } = useContent();
  const location = useLocation();

  // Determine if we're on the landing page
  const isLandingPage = location.url.pathname === "/";

  return (
    <header
      id="header"
      class={`sticky top-0 z-40 flex-none mx-auto transition-[opacity] ease-in-out ${
        isLandingPage
          ? store.isScrolling
            ? " border-y md:border-y-2 bg-background border-border"
            : "texture"
          : "bg-card border-y md:border-b-2" // Always bg-background when not on landing page
      }`}
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="relative text-default py-2 md:p-1 px-2 md:px-6 mx-auto w-full md:flex md:justify-between max-w-7xl">
        <div class="mr-auto rtl:mr-0 rtl:ml-auto flex justify-between">
          <a class="flex items-center" href={"/"}>
            {/* <Logo3 /> */}
            {/* <div  class="inline-flex hidden sm:block justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Free Website Audit</span> 
            <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </div> */}
          </a>
       
          <div class="flex items-center md:hidden gap-1">
            <Settings />
            {/* <Link href="/quote" class="w-full sm:w-auto">
              <Button size="md" class="w-full px-0">Get Quote</Button>
            </Link> */}
            <MenuModal />
          </div>
        </div>
        <nav
          class="items-center w-full md:w-auto hidden md:flex dark:text-white overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:mx-5 group"
          aria-label="Main navigation"
        >
          {menu && menu.items ? (
            <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium">
              {menu.items.map(({ text, href, items }, key) => {
                const isActive = location.url.pathname === href;
                return (
                  <li key={key} class={items?.length ? "dropdown" : ""}>
                    {items?.length ? (
                      <>
                        <button
                          class={`
              hover:bg-muted
              hover:text-primary
              px-4 py-3
              flex items-center
              transition-all duration-200
              relative
              rounded-base
              after:content-['']
              after:absolute
              after:bottom-[6px]
              after:left-1/2
              after:h-[2px]
              after:bg-primary
              after:transition-all
              after:duration-200
              ${isActive
                              ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                              : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                            }
            `}
                          onClick$={() => {
                            if (location.url.pathname !== "/") {
                              window.location.href = "/#services";
                            } else {
                              const servicesSection = document.getElementById("services");
                              if (servicesSection) {
                                servicesSection.scrollIntoView({ behavior: "smooth" });
                              }
                            }
                          }}
                        >
                          {text}
                          <IconChevronDown class="w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" />
                        </button>
                        <ul
                          class={`
    dropdown-menu
    md:backdrop-blur-md
    dark:md:bg-muted
    rounded
    md:absolute
    pl-4 md:pl-0
    md:hidden
    font-medium
    md:bg-white/90
    md:min-w-[200px]
    drop-shadow-xl
    py-2
  `}
                        >
                          {items.map(({ text: text2, href: href2 }, key2) => {
                            const isDropdownActive = location.url.pathname === href2;
                            const isFirst = key2 === 0;
                            const isLast = key2 === items.length - 1;

                            return (
                              <li key={key2}>
                                <a
                                  class={`hover:bg-muted hover:text-primary
            py-2 px-5 block whitespace-no-wrap transition-all duration-200 relative
            after:content-[''] after:absolute after:bottom-[4px] after:left-1/2 after:h-[2px] after:bg-primary after:transition-all after:duration-200
            ${isDropdownActive
                                      ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                                      : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                                    }
            ${isFirst ? "hover:rounded-t-base" : ""}
            ${isLast ? "hover:rounded-b-base" : ""}
            ${!isFirst && !isLast ? "hover:rounded-none" : ""}
          `}
                                  href={href2}
                                >
                                  {text2}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </>
                    ) : (
                      <a
                        class={`
            hover:bg-muted
            hover:text-primary
            px-4 py-3
            flex items-center
            relative
            transition-all duration-200
            after:content-['']
            after:absolute
            after:bottom-[6px]
            after:left-1/2
            after:h-[2px]
            after:bg-primary
            after:transition-all
            after:duration-200
            rounded-base
            ${isActive
                            ? "after:w-1/2 after:left-1/4 md:group-hover:[&:not(:hover)]:after:w-0 md:group-hover:[&:not(:hover)]:after:left-1/2"
                            : "after:w-0 md:hover:after:w-1/2 md:hover:after:left-1/4"
                          }
          `}
                        href={href}
                      >
                        {text}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </nav>
        <div class="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0">
          <div class="items-center flex justify-between w-full md:w-auto">
            <Settings />
            <Link href="/quote" class="w-full sm:w-auto">
              <Button size="md" class="w-full bg-primary">Get A Quote</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
});