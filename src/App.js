
import './App.css';
import Navbar from "./Components/Nevbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Counter from "./Components/Counter/Counter";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Reviews from "./Components/Reviews/Reviews";

function App() {
  return (
     <main className="bg-neutral-100">

         <Navbar/>
         <Banner/>
         <Counter/>
         <Projects/>
         <Services/>
         <Pricing/>
         <Reviews/>
     </main>
  );
}

export default App;
