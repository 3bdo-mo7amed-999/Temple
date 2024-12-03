import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./components/assets/style.css"
import { useRoutes } from "react-router-dom";
import Home from "./Home/Home";
import Shop from "./Shop/Shop";
import About from "./About/About";
import Contact from "./Contact/Contact";
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
