import { useLoaderData, Navigate, useNavigate } from "react-router-dom";
import { Wrapper } from "../assets/wrappers/CocktailPage";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { Drink, LoaderData } from "../api/types";
import axios from "axios";

// const singleCocktailQuery = (id: string) => {
//   return {
//     queryKey: ["cocktail", id],
//     queryFn: async () => {
//       const { drinks } = await axiosSingleCocktail.get<CocktailDBResponse>(
//         `${id}`
//       );
//       console.log(drinks);
//       return drinks;
//     },
//   };
// };
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';


const singleCocktailQuery = (id: string) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: any) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

export const Cocktail = () => {
  const { id } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  if (!id) return <Navigate to="/" />;

  const { data } = useQuery(singleCocktailQuery(id));

  if (!data || data.length === 0) return <Navigate to="/" />;
  const singleDrink = data[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strTags: tags,
    strVideo: video,
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) =>
        key.startsWith("strIngredient") && singleDrink[key as keyof Drink]
    )
    .map((key) => singleDrink[key as keyof Drink]);

  return (
    <Wrapper>
      <header>
        <button onClick={() => navigate(-1)} className="btn">
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Tags:</span> {tags}
          </p>
          {video && (
            <p>
              <span className="drink-data">Video:</span>
              <a href={video}>Watch here</a>
            </p>
          )}
          <p>
            <span className="drink-data">ingredients :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={item}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
