import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import BOdy from "./Components/Body";
import { CTA } from "./Components/Cta";
import SmallText from "./Components/SmallHeading";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-950 font-manrope text-gray-900 antialiased selection:bg-[#C9A253] selection:text-black">
        <Nav />
        <main>
          <Hero />
        </main>
      </div>
      <BOdy />
      <CTA
        Header="We'd love to worship the lord with You"
        SmallHead="Come As you're. Join Our family this Sunday"
      />
      <SmallText
        text="Explore More Through our Socials"
        className="!text-3xl !mx-auto !block !mt-6"
      />
      <Footer />
    </div>
  );
}

export default App;
