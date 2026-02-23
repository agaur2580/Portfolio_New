import { useEffect, useMemo, useRef, useState } from "react";

export default function About() {
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
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const quickStats = useMemo(
    () => [
      {
        name: "Frontend Focus",
        icon1: "./assets/code-icon.png",
        icon2: "./assets/code-icon-dark.png",
        description:
          "React.js, responsive UI, accessibility, performance and clean code practices.",
      },
      {
        name: "Education",
        icon1: "./assets/edu-icon.png",
        icon2: "./assets/edu-icon-dark.png",
        description:
          "MCA (CGPA 8.50) — Pranveer Singh Institute of Technology, Kanpur (2024–Present).",
      },
      
      {
        name: "Projects",
        icon1: "./assets/project-icon.png",
        icon2: "./assets/project-icon-dark.png",
        description:
          "Built 5+ web projects including Expense Tracker & Digital Civix platform.",
      },
    ],
    []
  );

  const tools = useMemo(
    () => [
      { name: "VS Code", icon: "./assets/vscode.png" },
      { name: "Git", icon: "./assets/git.png" },
      { name: "GitHub", icon: "./assets/github.png" }, // add if you have
      { name: "Postman", icon: "./assets/postman.png" }, // add if you have
      { name: "Figma", icon: "./assets/figma.png" },
      { name: "MongoDB", icon: "./assets/mongodb.png" },
    
    ],
    []
  );

  // ✅ About-section proficiency (mini stack)
  const aboutStack = useMemo(
    () => [
      { name: "React.js", level: 82, icon: "./assets/react.svg" },
      { name: "JavaScript (ES6+)", level: 85, icon: "./assets/javascript.png" },
      { name: "HTML5", level: 90, icon: "./assets/html.png" },
      { name: "CSS3", level: 85, icon: "./assets/css.png" },
      { name: "Tailwind CSS", level: 80, icon: "./assets/tailwind.png" },
      { name: "REST APIs", level: 78, icon: "./assets/api.png" }, // add if you have
    ],
    []
  );

  const internshipHighlights = useMemo(
    () => [
      "Built component-based React interfaces and reusable UI components",
      "Integrated REST APIs and practiced authentication concepts (JWT/OAuth)",
      "Followed Agile workflow, debugging practices and Git version control",
    ],
    []
  );

  const softSkills = useMemo(
    () => [
      "Analytical Thinking",
      "Team Collaboration",
      "Problem Solving",
      "Adaptability",
      "Communication",
      "Time Management",
    ],
    []
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20 overflow-hidden"
    >
      {/* ✅ Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      {/* ✅ Floating blobs */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl animate-floatSlow" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-floatSlow2" />

      <div
        className={[
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 dark:text-white">
          About Me
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80">
          I’m an MCA candidate and Frontend Developer focused on building
          responsive, accessible, and production-ready web interfaces.
        </p>

        <div className="flex w-full flex-col lg:flex-row items-center gap-14">
          {/* Left: Image */}
          <div
            className={[
              "max-w-max mx-auto relative transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
            ].join(" ")}
          >
            <img
              src="./assets/user-image.jpg"
              alt="Aditya Singh Gaur portrait"
              className="w-64 sm:w-80 rounded-3xl max-w-none"
            />

            <div className="bg-white dark:bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
              <img
                src="./assets/circular-text.png"
                alt="Circular developer text"
                className="w-full animate-spin_slow"
              />
              <img
                src="./assets/dev_icon.png"
                alt="Developer icon"
                className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            {/* ✅ Glass intro card */}
            <div className="glass-panel">
              <p className="font-Ovo text-gray-900 dark:text-white leading-relaxed">
                I enjoy turning UI designs into fast, clean, and maintainable
                web experiences using modern JavaScript and React.
              </p>

              <p className="mt-4 font-Ovo text-gray-700 dark:text-white/80 leading-relaxed">
                During my internship at{" "}
                <span className="font-semibold">Infosys Springboard</span>, I
                worked on frontend development, practiced API integration, and
                followed Agile + Git workflows to deliver reliable features.
              </p>

              {/* Internship bullets */}
              <ul className="mt-5 space-y-2 text-gray-700 dark:text-white/80 list-disc pl-5">
                {internshipHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {/* ✅ Quick cards */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              {quickStats.map((item, i) => (
                <li
                  key={item.name}
                  className={[
                    "glass-card transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6",
                  ].join(" ")}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <img
                    src={item.icon1}
                    alt={`${item.name} icon`}
                    className="w-7 mt-2 dark:hidden"
                  />
                  <img
                    src={item.icon2}
                    alt={`${item.name} icon dark`}
                    className="w-7 mt-2 hidden dark:block"
                  />
                  <h3 className="my-4 font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-700 text-sm dark:text-white/80">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            {/* ✅ About mini-stack with progress */}
            <div className="mt-12 glass-panel">
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  Core Skills 
                </h3>
                <span className="text-xs sm:text-sm text-gray-700 dark:text-white/70">
                  Proficiency overview
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {aboutStack.map((s, idx) => (
                  <div
                    key={s.name}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                        <img
                          src={s.icon}
                          alt={`${s.name} icon`}
                          className="w-7 h-7 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {s.name}
                        </p>
                        <p className="text-xs text-gray-700 dark:text-white/70">
                          {s.level}% proficiency
                        </p>
                      </div>

                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-900 dark:text-white">
                        {s.level}%
                      </span>
                    </div>

                    <div className="mt-3 h-2 w-full rounded-full bg-white/10 border border-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full progress-fill"
                        style={{
                          width: isVisible ? `${s.level}%` : "0%",
                          transitionDelay: `${idx * 70 + 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Tools */}
            <div className="mt-12">
              <h4 className="text-gray-900 font-Ovo dark:text-white/80">
                Tools I Use
              </h4>
              <ul className="flex flex-wrap items-center gap-3 sm:gap-5 mt-5">
                {tools.map((tool) => (
                  <li
                    key={tool.name}
                    title={tool.name}
                    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-white/15 bg-white/10 rounded-xl cursor-pointer hover:-translate-y-1 transition-all duration-300"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-5 sm:w-7"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* ✅ Soft Skills separate */}
            <div className="mt-12 glass-panel">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  Soft Skills
                </h3>
                <span className="text-xs sm:text-sm text-gray-700 dark:text-white/70">
                  Professional strengths
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {softSkills.map((s) => (
                  <span
                    key={s}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm text-gray-900 dark:text-white hover:bg-white/15 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Styles: gradient + glass + progress + float */}
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

        .glass-card{
          border-radius: 18px;
          padding: 18px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .glass-card:hover{
          transform: translateY(-6px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .glass-panel{
          border-radius: 22px;
          padding: 22px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .progress-fill{
          background: linear-gradient(90deg, rgba(168,85,247,0.9), rgba(236,72,153,0.85), rgba(34,211,238,0.85));
          transition: width 900ms cubic-bezier(.2,.8,.2,1);
        }

        .animate-floatSlow{ animation: floatSlow 8s ease-in-out infinite; }
        .animate-floatSlow2{ animation: floatSlow2 10s ease-in-out infinite; }

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