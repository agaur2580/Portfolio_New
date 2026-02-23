import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const sideMenuRef = useRef(null);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Apply theme
  const applyTheme = (darkMode) => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.theme = darkMode ? "dark" : "light";
    setIsDark(darkMode);
  };

  const toggleTheme = () => {
    applyTheme(!document.documentElement.classList.contains("dark"));
  };

  // Mobile menu
  const openMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-full");
    sideMenuRef.current.classList.add("translate-x-0");
  };

  const closeMenu = () => {
    sideMenuRef.current.classList.remove("translate-x-0");
    sideMenuRef.current.classList.add("translate-x-full");
  };

  useEffect(() => {
    const initialDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    applyTheme(initialDark);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Subtle animated gradient strip */}
      <div className="pointer-events-none fixed top-0 left-0 right-0 h-24 -z-10">
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-600/20 via-pink-500/15 to-cyan-500/20" />
      </div>

      <nav
        className={`fixed w-full top-0 left-0 z-50 px-6 lg:px-10 xl:px-[8%] py-4 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-white/10 border-b border-white/15 shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">

          {/* ✅ PROFESSIONAL TEXT LOGO */}
          <a href="#top" className="flex items-center gap-2">
            <span className="text-2xl font-semibold tracking-wide font-Ovo text-gray-900 dark:text-white">
              Aditya
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 px-10 py-3 rounded-full font-Ovo backdrop-blur-md bg-white/10 border border-white/20">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="h-10 w-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:scale-105 transition"
            >
              <img
                src={isDark ? "./assets/sun_icon.png" : "./assets/moon_icon.png"}
                alt="Theme toggle"
                className="w-5"
              />
            </button>

            {/* Contact Button */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 px-6 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition font-Ovo"
            >
              Contact
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={openMenu}
              className="block md:hidden h-10 w-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/10 border border-white/20"
            >
              <img
                src="./assets/menu-black.png"
                alt="Menu"
                className="w-6 dark:hidden"
              />
              <img
                src="./assets/menu-white.png"
                alt="Menu"
                className="w-6 hidden dark:block"
              />
            </button>
          </div>
        </div>

        {/* Mobile Side Menu */}
        <aside
          ref={sideMenuRef}
          className="fixed top-0 right-0 w-72 h-screen translate-x-full transition-transform duration-500 md:hidden backdrop-blur-xl bg-white/10 border-l border-white/20 p-8"
        >
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6"
          >
            <img
              src="./assets/close-black.png"
              alt="Close"
              className="w-5 dark:hidden"
            />
            <img
              src="./assets/close-white.png"
              alt="Close"
              className="w-5 hidden dark:block"
            />
          </button>

          <ul className="mt-16 flex flex-col gap-6 font-Ovo">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="hover:text-gray-600 dark:hover:text-gray-300 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </nav>

      {/* Gradient Animation CSS */}
      <style>{`
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 8s ease infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}