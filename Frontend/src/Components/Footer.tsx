import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#050816] text-white py-20">
      <div
        data-aos="fade-up"
        className="container mx-auto px-6 flex min-h-[320px] flex-col md:flex-row justify-between gap-12"
      >
        <div className="max-w-md flex flex-col justify-center">
          <h3 className=" font-cinzel font-extrabold text-4xl mb-16">
            Yeka MKC CHURCH
          </h3>
          <p className="text-sm text-slate-400 text-center md:text-left">
            © 2026 Yeka MKC Local Church. All rights reserved. Elevating
            tradition through faith.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label="YouTube"
              className="text-white transition-colors hover:text-amber-300"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white transition-colors hover:text-amber-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-white transition-colors hover:text-amber-300"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10">
          <div>
            <p className="text-sm uppercase text-amber-300 mb-4">Explore</p>
            <ul className="space-y-3 text-slate-300">
              <li>About Us</li>
              <li>Ministries</li>
              <li>Get Involved</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase text-amber-300 mb-4">Information</p>
            <ul className="space-y-3 text-slate-300">
              <li>Events</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
