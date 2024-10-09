import React, { useState, useEffect } from "react";
import {
  Home,
  Compass,
  Bookmark,
  ArrowLeftToLine,
  ArrowRightToLine,
  LogIn,
  Menu,
  Twitter,
} from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineMobile } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const navItems = [
    { icon: <Home size={24} />, label: "Home", href: "/" },
    { icon: <Compass size={24} />, label: "Discover", href: "/discover" },
    { icon: <Bookmark size={24} />, label: "Library" },
    { icon: <LogIn size={23} />, label: "Sign in" },
  ];

  // Hook to track window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) return null; // Do not render if mobile

  return (
    <div
      className={`fixed z-20 h-full transition-all duration-300 ease-in-out ${
        isOpen ? "w-64" : "w-20"
      } border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900`}
    >
      <div className="sticky top-0 flex h-full flex-col justify-between overflow-y-auto overflow-x-hidden pb-2 pt-3 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        <div className="mt-1 grow">
          <div
            className={`flex items-center mb-2 justify-between ${
              isOpen ? "px-4" : "px-1"
            }`}
          >
            <a aria-label="Perplexity" className="block" href="/">
              <div className="h-auto w-28 md:w-36 flex items-center">
                <svg
                  viewBox="0 0 350 400"
                  className={`fill-current text-gray-800 dark:text-white ${
                    isOpen ? " " : "w-16 h-auto "
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M101.008 42L190.99 124.905V124.886V42.1913H208.506V125.276L298.891 42V136.524H336V272.866H299.005V357.035L208.506 277.525V357.948H190.99V278.836L101.11 358V272.866H64V136.524H101.008V42ZM177.785 153.826H81.5159V255.564H101.088V223.472L177.785 153.826ZM118.625 231.149V319.392L190.99 255.655V165.421L118.625 231.149ZM209.01 254.812V165.336L281.396 231.068V272.866H281.489V318.491L209.01 254.812ZM299.005 255.564H318.484V153.826H222.932L299.005 222.751V255.564ZM281.375 136.524V81.7983L221.977 136.524H281.375ZM177.921 136.524H118.524V81.7983L177.921 136.524Z"
                    fill="#24bcd1"
                  />
                </svg>
                {isOpen && (
                  <h1 className="text-white ml-1 text-2xl font-mono tracking-tighter">
                    perplexity
                  </h1>
                )}
              </div>
            </a>
            <button
              onClick={toggleNav}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label={isOpen ? "Collapse" : "Expand"}
            >
              {isOpen ? <ArrowLeftToLine size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <div className="my-4 pb-1 pt-2">
            {isOpen ? (
              <div className="mx-4">
                <button className="group flex w-full items-center justify-between rounded-full bg-black border border-gray-200 dark:border-gray-700 py-2 pl-4 pr-2 hover:ring-2 hover:ring-blue-500 dark:hover:ring-blue-400 transition duration-200">
                  <div className="truncate text-sm font-medium text-gray-600 dark:text-gray-300">
                    New Thread
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex h-5 min-w-5 items-center justify-center rounded border px-1 font-mono border-gray-200 dark:border-gray-700">
                      Ctrl
                    </div>
                    <div className="flex h-5 w-5 items-center justify-center rounded border font-mono border-gray-200 dark:border-gray-700">
                      I
                    </div>
                  </div>
                </button>
              </div>
            ) : (
              <div className="mx-4">
                <button className="flex items-center justify-center w-full h-10 rounded-full bg-black border border-gray-200 dark:border-gray-700 hover:ring-2 hover:ring-blue-500 dark:hover:ring-blue-400 transition duration-200">
                  <AiOutlinePlus size={20} className="text-white" />
                </button>
              </div>
            )}
          </div>

          <nav>
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="flex items-center mx-2 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.icon}
                {isOpen && <span className="ml-4">{item.label}</span>}
              </a>
            ))}
          </nav>

          {/* Sign Up Button */}
          {isOpen && (
            <button className="w-[80%] mt-3 ml-4 bg-[#24bcd1] text-black py-2 px-4 rounded-full hover:bg-[#00adc2] mr-8 font-semibold transition-colors ">
              Sign Up
            </button>
          )}
        </div>

        <div className="mt-auto">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-2 px-4">
            <div className="flex items-center justify-between">
              {isOpen && (
                <>
                  <button className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full px-3 py-2">
                    <AiOutlineMobile size={20} />
                    <span className="ml-2">Download</span>
                  </button>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://twitter.com/perplexity_ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="https://discord.gg/perplexity-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                    >
                      <FaDiscord size={20} />
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Icon to open sidebar */}
        {!isOpen && (
          <div className="flex justify-center items-center mb-4">
            <button
              onClick={toggleNav}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-gray-700"
              aria-label="Expand Navigation"
            >
              <ArrowRightToLine size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
