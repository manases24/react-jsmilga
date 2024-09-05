import { AppProvider } from "./context";
import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import { ThemeToggle } from "./ThemeToggle";

export function App() {
  return (
    <AppProvider>
      <main>
        <ThemeToggle />
        <SearchForm />
        <Gallery />
      </main>
    </AppProvider>
  );
}
