import { Tour } from "./Tour";
import { TourItem } from "./types";

interface ToursProps {
  tours: TourItem[];
  removeTour: (id: number) => void;
}

export function Tours({ tours, removeTour }: ToursProps) {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
}
