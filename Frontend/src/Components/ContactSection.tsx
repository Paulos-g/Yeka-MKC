import type { IconType } from "react-icons";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { useState, type FormEvent } from "react";
import api from "../lib/axios";
interface InfoCardProps {
  title: string;
  lines: string[];
  icon: IconType;
}

function InfoCard({ title, lines, icon: Icon }: InfoCardProps) {
  return (
    <div className="rounded-[22px] border border-slate-200 bg-white p-8 shadow-[0_6px_18px_rgba(15,23,42,0.03)]">
      <div className="mb-5 flex justify-center text-blue-500">
        <Icon className="text-4xl" />
      </div>

      <h3 className="text-center text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>

      <div className="mt-6 space-y-2 text-center text-lg text-slate-700">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </div>
  );
}

const contactCards = [
  {
    title: "Address",
    icon: FaMapMarkerAlt,
    lines: ["YBTK+P2M, Addis Ababa", "Sholla Begtera, Ethiopia"],
  },
  {
    title: "Phone",
    icon: FaPhoneAlt,
    lines: ["+251-11-456-7890", "+251-912-345-678"],
  },
  {
    title: "Email",
    icon: FaEnvelope,
    lines: ["info@yekamkcchurch.org"],
  },
  {
    title: "Office Hours",
    icon: FaClock,
    lines: ["Mon - Fri: 9:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
  },
];

function ContactSection() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post(
        "/contact/post",
        {
          full_name,
          email,
          message,
        },
        { withCredentials: true },
      );
      alert("We'll contact you be blessed!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {contactCards.map((card) => (
          <InfoCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            lines={card.lines}
          />
        ))}
      </div>

      <div className="mt-24 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_6px_18px_rgba(15,23,42,0.03)]">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Full Name
              </label>
              <input
                value={full_name}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="Your full name"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-lg font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here"
                className="w-full resize-none rounded-xl border border-slate-300 bg-slate-50 px-4 py-4 text-lg text-slate-700 outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="rounded-full bg-blue-500 px-7 py-3.5 text-lg font-semibold text-white transition hover:bg-blue-600"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="rounded-[26px] border border-slate-200 bg-white p-8 shadow-[0_6px_18px_rgba(15,23,42,0.03)]">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Find Us
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.416486372634!2d38.793506774780624!3d9.025717691035512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8556aa13251d%3A0x5fddead536e9f8ec!2sYeka%20Meserete%20Kirstos%20Church!5e0!3m2!1sen!2set!4v1786738003246!5m2!1sen!2set"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Yeka Meserete Kirstos Church map"
            />
          </div>

          <a
            href="https://maps.google.com/?q=Yeka+Meserete+Kirstos+Church"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-lg font-medium text-blue-600 transition hover:text-blue-700"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
