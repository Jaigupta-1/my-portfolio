import { Navbar } from "./components/Navbar";
import { MainLayout } from "./layouts/MainLayout";

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <MainLayout />
    </div>
  );
}

export default App;