import { Home } from "./components/Home";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { MainLayout } from "./layouts/MainLayout";
function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="h-screen w-full">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
