import { useEffect, useRef, useState } from "react";

export default function Header() {
  // ✅ Scroll animation on load/visible
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* ✅ Animated gradient background + blobs */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl animate-floatSlow" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-floatSlow2" />

      {/* ✅ Glass hero card */}
      <div
        className={[
          "w-11/12 max-w-4xl text-center mx-auto flex flex-col items-center justify-center gap-5",
          "glass-hero px-6 sm:px-10 py-10 sm:py-12",
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {/* Profile + status */}
        <div className="relative">
          <img
            src="./assets/profile-img.jpg"
            alt="Aditya Singh Gaur profile"
            className="rounded-full w-28 sm:w-32 ring-4 ring-white/20"
          />
          <span className="absolute -right-1 -bottom-1 h-5 w-5 rounded-full bg-green-400 ring-4 ring-white/20" />
        </div>

        <h3 className="flex items-end justify-center gap-2 text-lg sm:text-xl md:text-2xl font-Ovo text-gray-900 dark:text-white">
          Hi! I&apos;m <span className="font-semibold">Aditya Singh Gaur</span>
          <img
            src="./assets/hand-icon.png"
            alt="Waving hand icon"
            className="w-6 mb-1 animate-wave"
          />
        </h3>

        {/* ✅ Modern headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-[62px] leading-tight font-Ovo text-gray-900 dark:text-white">
          Frontend Developer crafting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500">
            responsive, accessible
          </span>{" "}
          web experiences.
        </h1>

        <p className="max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-white/80">
          MCA candidate based in Kanpur, India. Skilled in React.js, JavaScript
          (ES6+), and modern UI development with clean, production-ready code.
        </p>

        {/* ✅ Quick mini stats */}
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <span className="chip">React.js</span>
          <span className="chip">REST APIs</span>
          <span className="chip">Tailwind CSS</span>
          <span className="chip">Git & GitHub</span>
        </div>

        {/* ✅ CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-5">
          <a
            href="#contact"
            className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 shadow-lg shadow-black/10 hover:opacity-95 transition dark:border-transparent"
          >
            Contact Me{" "}
            <img
              src="./assets/right-arrow-white.png"
              alt="Arrow icon"
              className="w-4"
            />
          </a>

          <a
            href="./assets/Aditya_Singh.pdf"
            download
            className="px-10 py-2.5 rounded-full border border-white/20 bg-white/10 text-gray-900 dark:text-white hover:bg-white/15 transition flex items-center gap-2"
          >
            Download Resume{" "}
            <img
              src="./assets/download-icon.png"
              alt="Download icon"
              className="w-4 dark:invert"
            />
          </a>
        </div>

        {/* ✅ Scroll hint */}
        <a
          href="#about"
          className="mt-6 text-sm text-gray-700 dark:text-white/70 flex items-center gap-2 hover:text-gray-900 dark:hover:text-white transition"
        >
          Scroll to explore
          <span className="inline-block animate-bounce">↓</span>
        </a>
      </div>

      {/* ✅ Component styles (gradient, glass, wave, chips, floats) */}
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

        .glass-hero{
          border-radius: 26px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .chip{
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.15);
          font-size: 13px;
          color: rgba(17,24,39,0.9);
        }
        :global(.dark) .chip{
          color: rgba(255,255,255,0.85);
        }

        .animate-wave{
          transform-origin: 70% 70%;
          animation: wave 1.8s ease-in-out infinite;
        }
        @keyframes wave{
          0%{ transform: rotate(0deg); }
          10%{ transform: rotate(14deg); }
          20%{ transform: rotate(-8deg); }
          30%{ transform: rotate(14deg); }
          40%{ transform: rotate(-4deg); }
          50%{ transform: rotate(10deg); }
          60%{ transform: rotate(0deg); }
          100%{ transform: rotate(0deg); }
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
    </header>
  );
}