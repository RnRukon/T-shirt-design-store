import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy';
import NotFound from './Components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/privacy-policy",
    element:<PrivacyPolicy/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
]);

function App() {


  return (
     <main className="bg-neutral-100 " id="home">
         
         <RouterProvider router={router} />
         
     </main>
  );
}

export default App;
