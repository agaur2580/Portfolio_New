export default function Footer() {
  return (
    <footer className="relative mt-28 overflow-hidden">

      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-r from-purple-600/30 via-pink-500/25 to-cyan-500/25" />
      <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

      <div className="mx-[8%] sm:mx-[12%] py-16">

        {/* Top Section */}
        <div className="glass-footer p-10 text-center">

          {/* Professional Text Logo */}
          <h2 className="text-3xl font-semibold font-Ovo tracking-wide text-gray-900 dark:text-white">
            Aditya Singh Gaur
          </h2>

          <p className="mt-3 text-gray-700 dark:text-white/80 font-Ovo">
            Frontend Developer • React.js Enthusiast • 
            <span className="text-green-500 font-semibold"> Remotely Available</span>
          </p>

          {/* Email */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <img
              src="./assets/mail_icon.png"
              alt="Mail icon"
              className="w-5 dark:hidden"
            />
            <img
              src="./assets/mail_icon_dark.png"
              alt="Mail icon dark"
              className="w-5 hidden dark:block"
            />

            <a
              href="mailto:agaur4348@gmail.com"
              className="hover:underline text-gray-800 dark:text-white"
            >
              agaur4348@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/agaur2580"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/psitaditya0010/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-10 text-sm text-gray-700 dark:text-white/70">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">Aditya Portfolio</span>.  
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Footer Styles */}
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

        .glass-footer {
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .social-pill {
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.10);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          transition: 0.3s ease;
          color: #1f2937;
        }

        .dark .social-pill {
          color: white;
        }

        .social-pill:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.18);
        }
      `}</style>

    </footer>
  );
}