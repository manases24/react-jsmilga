import { CartContainer } from "./CartContainer";
import { useGlobalContext } from "./context";
import { Navbar } from "./Navbar";

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div className="loading" style={{ marginTop: "6rem" }}></div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
