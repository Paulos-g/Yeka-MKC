import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import About from "./Pages/About.tsx";
import Services from "./Pages/Service";
import Donation from "./Pages/Donate";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Pages/Contact.tsx";
import DonationSuccess from "./Pages/DonationSuccess.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Home" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/donation-success" element={<DonationSuccess />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    ,
  </StrictMode>,
);
