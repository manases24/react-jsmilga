import { useState, useEffect } from "react";
import { createClient, EntryCollection } from "contentful";
import { ProjectFields, ProjectType } from "./api/types"; 

// Crear el cliente de Contentful
const client = createClient({
  space: "3e7vobor0uwr",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

// Hook para obtener proyectos desde Contentful
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);

  // Función para obtener los datos
  const getData = async () => {
    try {
      // Tipado correcto del response
      const response: EntryCollection<ProjectFields> = await client.getEntries({
        content_type: "projects",
      });

      // Mapear los datos obtenidos de Contentful
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;

        // Validamos que title y url sean cadenas, si no, les asignamos un valor por defecto
        const validTitle = typeof title === "string" ? title : "Untitled";
        const validUrl = typeof url === "string" ? url : "#";

        const id = item.sys.id;
        const img = image?.fields?.file?.url || "";

        return { title: validTitle, url: validUrl, id, img };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Efecto para ejecutar la función cuando el componente se monta
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
