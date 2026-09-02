import chrchBg from "../assets/chrch bg.jpg";
import Buttons from "./Button";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4.5rem)] flex items-center bg-gray-950 overflow-hidden">
      {/* Background Image with Dark Vignette/Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={chrchBg}
          alt="Yeka MKC Church Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-105"
        />
        {/* Dark gradient overlay for rich contrast & readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 text-white w-full">
        <div className="max-w-2xl">
          {/* Top Tagline */}
          <span
            data-aos="fade-down"
            className="inline-block text-[#C9A253] font-manrope font-bold text-xs sm:text-sm tracking-widest uppercase mb-4"
          >
            WELCOME TO YEKA MKC
          </span>

          {/* Main Title */}
          <h1
            data-aos="fade-up"
            data-aos-delay="80"
            className="font-cinzel font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-6 tracking-tight"
          >
            A Family of Faith, <br className="hidden sm:inline" />
            Hope &amp; Love
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="160"
            className="font-manrope text-gray-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-xl"
          >
            A Christ-centered church family in Addis Ababa, growing together in
            faith, worship, and love.
          </p>

          {/* Bible Verse Card with Gold Accent Border */}
          <div
            data-aos="fade"
            data-aos-delay="220"
            className="border-l-2 border-[#C9A253] pl-4 sm:pl-5 py-3 mb-10 my-6 max-w-xl bg-black/20 backdrop-blur-xs rounded-r-md"
          >
            <blockquote className="font-cormorant italic text-gray-200 text-base sm:text-lg leading-snug">
              &ldquo;For no one can lay any foundation other than the one
              already laid, which is Jesus Christ.&rdquo;
            </blockquote>
            <p className="font-cormorant italic text-[#C9A253] text-xs sm:text-sm mt-1">
              1 Corinthians 3:11
            </p>

            <blockquote className="font-amharic italic text-gray-300 text-xs sm:text-sm leading-relaxed mt-3">
              &ldquo;ከመሠረተው በቀር ማንም ሌላ መሠረት ሊመሠርት አይችልም፤ እርሱም ኢየሱስ ክርስቶስ
              ነው።&rdquo;
            </blockquote>
            <p className="font-amharic italic text-[#C9A253] text-[11px] sm:text-xs mt-0.5">
              1ኛ ቆሮንቶስ 3:11
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <Buttons
              text="Join Us This Sunday"
              icon={FaArrowRight}
              className="!px-6 !py-3.5 !text-sm !font-semibold !rounded-md"
            />
            <Buttons
              text="Learn More"
              icon={FaArrowRight}
              className="  !px-6 !py-3.5 !text-sm !font-semibold !rounded-md !bg-black !border-solid !border-amber-300 !border-2  hover:!bg-amber-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
