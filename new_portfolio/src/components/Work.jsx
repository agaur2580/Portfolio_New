import { useEffect, useMemo, useRef, useState } from "react";

export default function Work() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ✅ Resume-aligned projects (from your resume)
  const work = useMemo(
    () => [
      {
        name: "Splitwise-Inspired Expense Tracker",
        type: "React.js • REST APIs • Vercel",
        cover: "./assets/work-1.png",
        description:
          "Secure, responsive expense tracker with API integration and production deployment.",
        tags: ["React", "REST API", "Vercel"],
        link: "#", // put your live link or github link
      },
      {
        name: "Digital Civix – Petition Platform",
        type: "React • Node.js • Express • MongoDB",
        cover: "./assets/work-2.png",
        description:
          "Civic engagement platform with authentication, petition management, polling, and role-based access.",
        tags: ["MERN", "Auth", "MongoDB"],
        link: "#",
      },
      {
        name: "Weather App (Live Location)",
        type: "HTML • CSS • JavaScript • API",
        cover: "./assets/work-3.png",
        description:
          "Weather app using API integration with real-time search and location-based results.",
        tags: ["JavaScript", "API", "UI"],
        link: "#",
      },
    //   {
    //     name: "Portfolio Website (This Site)",
    //     type: "React • Tailwind • Dark/Light Mode",
    //     cover: "./assets/work-4.png",
    //     description:
    //       "Modern responsive portfolio with theme toggle, smooth UI, and optimized sections.",
    //     tags: ["React", "Tailwind", "Responsive"],
    //     link: "#",
    //   },
    ],
    []
  );

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full px-[8%] sm:px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* ✅ Animated gradient background (same modern theme) */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      {/* ✅ Floating blobs */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl animate-floatSlow" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-floatSlow2" />

      <div
        className={[
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">
          My Portfolio
        </h4>

        <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 dark:text-white">
          Featured Projects
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80">
          A selection of projects aligned with my resume—focused on React.js,
          REST API integration, responsive UI, and production-ready development.
        </p>

        {/* ✅ Projects grid (responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {work.map((item, index) => (
            <article
              key={item.name}
              className={[
                "work-card group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              {/* Cover */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={item.cover}
                  alt={item.name}
                  className="h-48 w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                />

                {/* top-right open button */}
                <a
                  href={item.link}
                  aria-label={`Open ${item.name}`}
                  className="absolute top-4 right-4 h-11 w-11 rounded-full open-btn flex items-center justify-center"
                >
                  <img
                    src="./assets/send-icon.png"
                    alt="Open project"
                    className="w-5"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-xs tracking-wide uppercase text-gray-700 dark:text-white/70">
                  {item.type}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-white/80">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 dark:text-purple-300 hover:gap-3 transition-all"
                  >
                    View project
                    <img
                      src="./assets/right-arrow.png"
                      alt=""
                      className="w-4"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Show more */}
        <a
          href="#"
          className="w-max flex items-center justify-center gap-2 text-gray-800 border border-white/20 bg-white/10 hover:bg-white/15 rounded-full py-2.5 px-8 mx-auto mt-14 transition dark:text-white"
        >
          Show more
          <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
          <img
            src="./assets/right-arrow-bold-dark.png"
            alt=""
            className="w-4 hidden dark:block"
          />
        </a>
      </div>

      {/* ✅ Styles: gradient + glass + pills + hover */}
      <style>{`
        .animate-gradient{
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
        }
        @keyframes gradientMove{
          0%{ background-position: 0% 50%; }
          50%{ background-position: 100% 50%; }
          100%{ background-position: 0% 50%; }
        }

        .work-card{
          border-radius: 22px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          overflow: hidden;
        }
        .work-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 15px 45px rgba(0,0,0,0.16);
        }

        .open-btn{
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.22);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: 200ms ease;
        }
        .open-btn:hover{
          transform: translateY(-2px);
          background: rgba(255,255,255,0.18);
        }

        .tag-pill{
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.16);
          font-size: 12px;
          color: rgba(17,24,39,0.9);
        }
        :global(.dark) .tag-pill{
          color: rgba(255,255,255,0.85);
        }

        .animate-floatSlow{
          animation: floatSlow 8s ease-in-out infinite;
        }
        .animate-floatSlow2{
          animation: floatSlow2 10s ease-in-out infinite;
        }
        @keyframes floatSlow{
          0%,100%{ transform: translate(0,0); }
          50%{ transform: translate(18px, 14px); }
        }
        @keyframes floatSlow2{
          0%,100%{ transform: translate(0,0); }
          50%{ transform: translate(-16px, -10px); }
        }
      `}</style>
    </section>
  );
}