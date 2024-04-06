import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/sidebar";
import Hero from "./component/hero";

function App() {
  return (
    <div className="flex bg-[#F9F9F9]">
      <div className=" w-[40wh]">
        <Sidebar />
      </div>
      <div className=" w-full">
        <Hero />
      </div>
    </div>
  );
}

export default App;
