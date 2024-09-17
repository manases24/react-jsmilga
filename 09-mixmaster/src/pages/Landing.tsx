import { useLoaderData } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { axioscocktailSearch } from "../api/httpAdapter";
import { Drink, LoaderData } from "../api/types";
import { SearchForm } from "../components/SearchForm";
import { CocktailList } from "../components/CocktailList";

const searchCocktailsQuery = (searchTerm: string) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      // Usar el término de búsqueda en la URL
      const response = await axioscocktailSearch.get<{
        drinks: Drink[];
      }>(`${searchTerm}`);
      return response.drinks;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: { request: Request }) => {
    const url = new URL(request.url);

    // Obtener el término de búsqueda desde la URL
    const searchTerm = url.searchParams.get("search") || "";

    try {
      // Asegurarse de que los datos de la consulta estén disponibles
      await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));

      // Devolver el término de búsqueda para usarlo en otros contextos
      return { searchTerm };
    } catch (error) {
      console.error("Error al cargar los datos de búsqueda:", error);
      throw new Error("No se pudieron cargar los datos de búsqueda");
    }
  };

export const Landing = () => {
  const { searchTerm } = useLoaderData() as LoaderData;
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
