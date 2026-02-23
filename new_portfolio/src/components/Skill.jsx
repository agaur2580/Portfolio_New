import { useEffect, useMemo, useRef, useState } from "react";

export default function Skill() {
  // ✅ Resume-aligned + proficiency %
  const skillCategories = useMemo(
    () => [
      {
        title: "Programming Languages",
        skills: [
          { name: "Java", level: 80, icon: "./assets/java.png" },
          { name: "JavaScript (ES6+)", level: 85, icon: "./assets/javascript.png" },
          { name: "Python", level: 70, icon: "./assets/python.png" },
        ],
      },
      {
        title: "Frontend Technologies",
        skills: [
          { name: "HTML5", level: 90, icon: "./assets/html.png" },
          { name: "CSS3", level: 85, icon: "./assets/css.png" },
          { name: "React.js", level: 82, icon: "./assets/react.svg" },
          { name: "Tailwind CSS", level: 80, icon: "./assets/tailwind.png" },
          { name: "Next.js (Basic)", level: 60, icon: "./assets/nextjs.png" },
        ],
      },
      {
        title: "Databases",
        skills: [
          { name: "SQL", level: 75, icon: "./assets/sql.png" },
          { name: "MongoDB", level: 72, icon: "./assets/mongodb.png" },
        ],
      },
      {
        title: "Tools & Platforms",
        skills: [
          { name: "Git", level: 80, icon: "./assets/git.png" },
          { name: "GitHub", level: 78, icon: "./assets/github.png" },
          { name: "VS Code", level: 85, icon: "./assets/vscode.png" },
          { name: "Postman", level: 72, icon: "./assets/postman.png" },
          { name: "Figma", level: 70, icon: "./assets/figma.png" },
          { name: "Vercel", level: 68, icon: "./assets/vercel.png" },
        ],
      },
    ],
    []
  );

  // ✅ Soft skills separate
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

  // ✅ Scroll animation (IntersectionObserver)
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full px-[8%] sm:px-[12%] py-16 scroll-mt-20 overflow-hidden"
    >
      {/* ✅ Animated gradient background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      {/* ✅ Subtle floating blobs */}
      <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-2xl animate-floatSlow" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-2xl animate-floatSlow2" />

      <div
        className={[
          "transition-all duration-700",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        ].join(" ")}
      >
        <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80">
          Resume-aligned technical stack with proficiency levels and tools used in real projects.
        </p>

        {/* ✅ Categories */}
        <div className="space-y-14">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={[
                "transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
              ].join(" ")}
              style={{ transitionDelay: `${catIndex * 90}ms` }}
            >
              <div className="flex items-center justify-between gap-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <span className="text-xs sm:text-sm text-gray-700 dark:text-white/70">
                  {category.skills.length} skills
                </span>
              </div>

              {/* ✅ Responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={[
                      "glass-card group",
                      "transition-all duration-500",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                    ].join(" ")}
                    style={{ transitionDelay: `${catIndex * 90 + i * 60}ms` }}
                  >
                    {/* Top row */}
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-8 h-8 object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </p>
                        <p className="text-xs text-gray-700 dark:text-white/70">
                          Proficiency: <span className="font-semibold">{skill.level}%</span>
                        </p>
                      </div>

                      <div className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 border border-white/15 text-gray-900 dark:text-white">
                        {skill.level}%
                      </div>
                    </div>

                    {/* ✅ Progress bar */}
                    <div className="mt-4">
                      <div className="h-2 w-full rounded-full bg-white/10 border border-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full progress-fill"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${catIndex * 90 + i * 60 + 150}ms`,
                          }}
                        />
                      </div>
                      <div className="mt-2 flex justify-between text-[11px] text-gray-700 dark:text-white/70">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                      </div>
                    </div>

                    {/* ✅ Small hint */}
                    <p className="mt-4 text-sm text-gray-700 dark:text-white/80 leading-relaxed">
                      Used in projects & assignments with focus on clean UI, responsiveness, and best practices.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Soft Skills Section (separate) */}
        <div
          className={[
            "mt-16 glass-panel transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          ].join(" ")}
          style={{ transitionDelay: "250ms" }}
        >
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              Soft Skills
            </h3>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-white/70">
              Communication + teamwork mindset
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

      {/* ✅ Component CSS (glass + gradient animation + progress fill + float) */}
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