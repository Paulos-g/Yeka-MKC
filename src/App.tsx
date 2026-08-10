import Nav from "./Components/Navbar";
function App() {
  return (
    <div className="bg-white-500 w-full min-h-screen ">
      <Nav />
      <div className="bg-red-500 w-32 h-32 rounded-full flex items-center justify-center">
        <h1 className="text-white font-bold">Login</h1>
      </div>
      <h1 className="text-white text-xl mt-4 text-center">Welcome to My App</h1>
      <h2 className="bg-amber-950 text-blue-400">
        this is the official page for bebi
      </h2>
    </div>
  );
}
export default App;
