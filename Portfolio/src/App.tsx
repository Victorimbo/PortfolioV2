import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
 
const router = createBrowserRouter([
    {
      element: <HomePage />,
      path: "/"
    },
    {
      element: <About />,
      path: "/About"
    },
    {
      element: <Projects />,
      path: "/Projects"
    },
    {
      element: <Contact />,
      path: "/Contact"
    },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;