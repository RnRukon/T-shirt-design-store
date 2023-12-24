
import './App.css';
import Navbar from "./Components/Nevbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Counter from "./Components/Counter/Counter";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
     <main className="bg-neutral-100">

         <Navbar/>
         <Banner/>
         <Counter/>
         <Projects/>
     </main>
  );
}

export default App;
