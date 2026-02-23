import { useEffect, useRef, useState } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      name: "Frontend Development",
      icon: "./assets/web-icon.png",
      description:
        "Building responsive, scalable, and high-performance web applications using React.js, JavaScript, and modern UI practices.",
      link: "#",
    },
    {
      name: "UI / UX Implementation",
      icon: "./assets/ui-icon.png",
      description:
        "Transforming design mockups into pixel-perfect, accessible, and production-ready web interfaces.",
      link: "#",
    },
    {
      name: "API Integration",
      icon: "./assets/api.png", // add if you have
      description:
        "Integrating REST APIs with secure authentication, proper state handling, and optimized data flow.",
      link: "#",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full px-[8%] sm:px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      <div
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700 dark:text-white/80">
          What I Offer
        </h4>

        <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 dark:text-white">
          My Services
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80">
          I specialize in modern frontend development and am
          <span className="font-semibold text-green-500">
            {" "}remotely available
          </span>{" "}
          for freelance, internship, and full-time opportunities.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`glass-card transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={service.icon}
                alt={`${service.name} icon`}
                className="w-12"
              />

              <h3 className="text-lg my-4 text-gray-900 dark:text-white font-semibold">
                {service.name}
              </h3>

              <p className="text-sm text-gray-700 leading-6 dark:text-white/80">
                {service.description}
              </p>

              <a
                href={service.link}
                className="flex items-center gap-2 text-sm mt-6 text-purple-600 dark:text-purple-400 hover:gap-3 transition-all"
              >
                Learn more
                <img
                  src="./assets/right-arrow.png"
                  alt=""
                  className="w-4"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Glass + Gradient CSS */}
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

        .glass-card {
          border-radius: 20px;
          padding: 30px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .glass-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
      `}</style>
    </section>
  );
}