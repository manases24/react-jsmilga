import { useEffect, useState } from "react";

import { TourItem } from "./types";
import { Loading } from "./Loading";
import { ErrorTour } from "./Error";
import { Tours } from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

function App() {
  const [state, setState] = useState<{
    loading: boolean;
    error: boolean;
    tours: TourItem[];
  }>({
    loading: true,
    error: false,
    tours: [],
  });

  async function fetcher() {
    setState({ ...state, loading: true, error: false });
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await res.json();
      console.log(data);
      setState({ loading: false, error: false, tours: data });
    } catch (error) {
      console.error("Error fetching tours:", error);
      setState({ loading: false, error: true, tours: [] });
    }
  }

  const removeTour = (id: number) => {
    const newTours = state.tours.filter((tour) => tour.id !== id);
    setState((prevState) => ({ ...prevState, tours: newTours }));
  };

  useEffect(() => {
    fetcher();
  }, []);

  if (state.loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (state.error) {
    return (
      <main>
        <ErrorTour />
      </main>
    );
  }

  if (state.tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetcher()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={state.tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
