
import './App.css';
import Navbar from "./Components/Nevbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Counter from "./Components/Counter/Counter";
import Projects from "./Components/Projects/Projects";
import Services from "./Components/Services/Services";
import Pricing from "./Components/Pricing/Pricing";
import Reviews from "./Components/Reviews/Reviews";
import OutTeam from "./Components/OurTeam/OutTeam";
import Subscribe from "./Components/Subscribe/Subscribe";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
     <main className="bg-neutral-100 " id="home">
         <Navbar/>
         <Banner/>
         <Counter/>
         <Projects/>
         <Services/>
         <Pricing/>
         <Reviews/>
         <OutTeam/>
         <Subscribe/>
         <Footer/>
     </main>
  );
}

export default App;
