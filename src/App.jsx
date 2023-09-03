import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// axios.defaults.baseURL = `http://localhost:5001`;
axios.defaults.baseURL = `https://mocdt-comingsite-backend.vercel.app`;

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
