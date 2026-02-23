import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  // ✅ Scroll animation
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

  // ✅ hCaptcha loader (safe: load only once)
  useEffect(() => {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (!captchadiv.length) return;

    captchadiv.forEach((item) => {
      const sitekey = item.dataset.sitekey;
      if (!sitekey) {
        item.dataset.sitekey = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";
      }
    });

    // prevent adding the script multiple times
    if (document.querySelector('script[src*="js.hcaptcha.com/1/api.js"]')) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.src = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
    document.body.appendChild(script);
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    // hcaptcha response (web3forms expects this)
    const hCaptcha = event.target.querySelector(
      'textarea[name="h-captcha-response"]'
    )?.value;

    if (!hCaptcha) {
      setResult("Please complete the captcha.");
      return;
    }

    if (!accessKey) {
      setResult("Missing form configuration. Add VITE_WEB3FORMS_ACCESS_KEY in .env");
      return;
    }

    setResult("Sending…");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", accessKey);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      }).then((r) => r.json());

      if (res.success) {
        setResult("✅ Message sent successfully. I’ll reply soon!");
        event.target.reset();
      } else {
        setResult(res.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setResult("Network error. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full px-[8%] sm:px-[12%] py-20 scroll-mt-20 overflow-hidden"
    >
      {/* ✅ Animated gradient background */}
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
          Connect with me
        </h4>

        <h2 className="text-center text-4xl sm:text-5xl font-Ovo text-gray-900 dark:text-white">
          Get in Touch
        </h2>

        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-white/80">
          Have a project, internship, or role in mind? Send a message and I’ll get back to you.
          <span className="font-semibold text-green-500"> Remotely available</span>.
        </p>

        {/* ✅ Glass form container */}
        <div className="max-w-2xl mx-auto glass-panel p-8 sm:p-10">
          <form onSubmit={onSubmit}>
            <input
              type="hidden"
              name="subject"
              value="Aditya Singh Gaur Portfolio - New Form Submission"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2 mb-6">
              <input
                type="text"
                placeholder="Your name"
                className="input-glass"
                required
                name="name"
              />

              <input
                type="email"
                placeholder="Your email"
                className="input-glass"
                required
                name="email"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Your message"
              className="input-glass resize-none"
              required
              name="message"
            ></textarea>

            {/* Captcha */}
            <div className="h-captcha mt-6 mb-6 max-w-full" data-captcha="true"></div>

            <button
              type="submit"
              className="mx-auto mt-2 flex items-center justify-center gap-2 rounded-full px-8 py-2.5 text-white bg-gradient-to-r from-[#b820e6] to-[#da7d20] hover:opacity-95 transition shadow-lg shadow-black/10"
            >
              Submit Message
              <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
            </button>

            {/* Result */}
            {result && (
              <p className="mt-5 text-center text-sm text-gray-800 dark:text-white/80">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* ✅ Local styles for glass + gradient + floating blobs */}
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

        .glass-panel{
          border-radius: 24px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .input-glass{
          width: 100%;
          padding: 12px 14px;
          border-radius: 14px;
          outline: none;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          color: rgba(17,24,39,0.95);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: 200ms ease;
        }
        :global(.dark) .input-glass{
          color: rgba(255,255,255,0.90);
        }
        .input-glass::placeholder{
          color: rgba(17,24,39,0.65);
        }
        :global(.dark) .input-glass::placeholder{
          color: rgba(255,255,255,0.65);
        }
        .input-glass:focus{
          transform: translateY(-1px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.12);
          border-color: rgba(255,255,255,0.35);
        }

        .pill-link{
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.18);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: 200ms ease;
          color: rgba(17,24,39,0.85);
          text-align: center;
        }
        :global(.dark) .pill-link{
          color: rgba(255,255,255,0.85);
        }
        .pill-link:hover{
          transform: translateY(-2px);
          background: rgba(255,255,255,0.14);
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