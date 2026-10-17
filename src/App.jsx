import { Navbar } from "./components/Navbar";
import { SobreMi } from "./components/SobreMi";

export default function App() {
    return (
    <div className="min-h-screen bg-[#0B1230] text-[#EAF0FF] font-manrope">
      <Navbar />
      
      <SobreMi id="sobre-mi"/>
      <div className="h-0.5 w-3/4 max-w-2xl mx-auto bg-linear-to-r from-transparent via-[#27346F] to-transparent my-12 md:my-20"></div>
    </div>
    );
}