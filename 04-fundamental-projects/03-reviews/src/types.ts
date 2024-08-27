export type Review = {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
};

// Define el tipo para una persona
export type Person = {
  name: string;
  job: string;
  image: string;
  text: string;
};

// Define el tipo para el estado del componente
export type AppState = {
  index: number;
  person: Person;
};
