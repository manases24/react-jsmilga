import { AppProvider } from "./context";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { Submenu } from "./Submenu";

function App() {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
      </main>
    </AppProvider>
  );
}

export default App;
