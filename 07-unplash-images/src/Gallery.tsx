import { useQuery } from "@tanstack/react-query";
import { useAppContext } from "./context";
import { UnsplashResponse } from "./services/types";
import { UnsplashApiAdapter } from "./services/httpAdapter";

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`;

console.log("API Key:", import.meta.env.VITE_API_KEY);

export const axiosFetch = new UnsplashApiAdapter(url);

export const Gallery = () => {
  const { searchTerm } = useAppContext();

  // Tipar el resultado de useQuery correctamente
  const { data, isLoading, isError } = useQuery<UnsplashResponse>({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const response = await axiosFetch.get<UnsplashResponse>(
        `${url}&query=${searchTerm}`
      );
      return response;
    },
  });

  // Manejo del estado de carga
  if (isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    );
  }

  // Manejo del estado de error
  if (isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    );
  }

  // Validación de los resultados
  const results = data?.results;
  if (!results || results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    );
  }

  // Renderizado de las imágenes
  return (
    <section className="image-container">
      {results.map((item) => (
        <img
          src={item.urls.regular}
          key={item.id}
          alt={item.alt_description || "image"}
          className="img"
        />
      ))}
    </section>
  );
};
