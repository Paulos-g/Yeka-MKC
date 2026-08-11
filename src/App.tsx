import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";
import BOdy from "./Components/Body";

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
    </div>
  );
}

export default App;
