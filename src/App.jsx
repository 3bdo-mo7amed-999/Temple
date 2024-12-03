import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/assets/style.css"
import { useRoutes } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import About from "./about/About";
import Contact from "./contact/Contact";
import NotFound from "./NotFound/NotFound";
function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/shop", element: <Shop /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <NotFound /> }
  ]);

  return <>{routes}</>;
}

export default App;
