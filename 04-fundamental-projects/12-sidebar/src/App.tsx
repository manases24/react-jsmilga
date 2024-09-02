import { AppProvider } from "./context";
import Home from "./Home";
import { Modal } from "./Modal";
import Sidebar from "./Sidebar";

function App() {
  return (
    <AppProvider>
      <Home />
      <Modal />
      <Sidebar />
    </AppProvider>
  );
}

export default App;
