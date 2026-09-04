import {
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaArrowUp,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050816] text-white">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-400/10 blur-[120px]" />

      <div className="relative container mx-auto px-6">
        {/* Top CTA */}
        <div
          data-aos="fade-up"
          className="border-b border-white/10 py-16 md:py-20"
        >
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-amber-300">
                You are welcome
              </p>

              <h2 className="font-cinzel text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Come worship with us.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                A place to grow in faith, find community, and experience the
                presence of God together.
              </p>
            </div>

            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full border border-amber-300/40 bg-amber-300 px-6 py-3.5 text-sm font-semibold text-[#050816] transition-all duration-300 hover:bg-amber-200 hover:shadow-[0_0_30px_rgba(252,211,77,0.15)]"
            >
              Visit Our Church
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-14 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div data-aos="fade-up" className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-cinzel text-2xl font-bold tracking-wide">
                YEKA <span className="text-amber-300">MKC</span>
              </h3>

              <div className="mt-3 h-[2px] w-12 bg-amber-300" />
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-400">
              Yeka MKC Local Church is a community of believers seeking to
              follow Christ, serve others, and share the love of God.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              {[
                {
                  icon: <FaFacebookF size={15} />,
                  label: "Facebook",
                },
                {
                  icon: <FaYoutube size={17} />,
                  label: "YouTube",
                },
                {
                  icon: <FaInstagram size={17} />,
                  label: "Instagram",
                },
                {
                  icon: <FaTiktok size={16} />,
                  label: "TikTok",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-amber-300 hover:text-[#050816]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Explore
            </h4>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a href="/about" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/ministries"
                  className="transition-colors hover:text-white"
                >
                  Ministries
                </a>
              </li>

              <li>
                <a
                  href="/events"
                  className="transition-colors hover:text-white"
                >
                  Events
                </a>
              </li>

              <li>
                <a
                  href="/donate"
                  className="transition-colors hover:text-white"
                >
                  Give & Donate
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Worship
            </h4>

            <div className="space-y-5 text-sm">
              <div>
                <p className="font-medium text-white">Sunday Service</p>
                <p className="mt-1 text-slate-400">
                  Join us for worship & fellowship
                </p>
              </div>

              <div>
                <p className="font-medium text-white">Prayer & Fellowship</p>
                <p className="mt-1 text-slate-400">Growing together in faith</p>
              </div>

              <a
                href="/events"
                className="inline-flex items-center gap-2 text-amber-300 transition-colors hover:text-amber-200"
              >
                View upcoming events
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Connect
            </h4>

            <div className="space-y-5 text-sm text-slate-400">
              <div className="flex gap-3">
                <FaLocationDot className="mt-1 shrink-0 text-amber-300" />
                <span>
                  Yeka, Addis Ababa
                  <br />
                  Ethiopia
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhone className="shrink-0 text-amber-300" />
                <a
                  href="tel:+251000000000"
                  className="transition-colors hover:text-white"
                >
                  +251 XX XXX XXXX
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-amber-300" />
                <a
                  href="mailto:info@yeka.mkc"
                  className="transition-colors hover:text-white"
                >
                  info@yeka.mkc
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Yeka MKC Local Church. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="transition-colors hover:text-slate-300"
            >
              Privacy Policy
            </a>

            <a href="/terms" className="transition-colors hover:text-slate-300">
              Terms
            </a>

            <a
              href="#"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-amber-300/40 hover:bg-amber-300 hover:text-[#050816]"
            >
              <FaArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
