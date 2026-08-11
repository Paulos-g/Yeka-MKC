import Nav from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 font-manrope text-gray-900 antialiased selection:bg-[#C9A253] selection:text-black">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
