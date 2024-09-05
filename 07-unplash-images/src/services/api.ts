import { axiosFetch } from "../Gallery";

export type UnsplashImage = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
};

export type UnsplashResponse = {
  results: UnsplashImage[];
};

// Ahora la función devuelve el tipo `UnsplashResponse` que es el formato correcto de la API de Unsplash
export const fetchImages = async (): Promise<UnsplashResponse> => {
  try {
    const response = await axiosFetch.get<UnsplashResponse>("/");
    return response; // Aquí solo retornas `response` directamente
  } catch (error) {
    console.error("Error fetching images", error);
    throw new Error("Failed to fetch images");
  }
};
