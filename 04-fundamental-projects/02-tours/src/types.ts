export type Tour = {
  loading: boolean;
  error: boolean;
  tours: string[];
};

export type TourItem = {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
  removeTour: (id: number) => void;
};
