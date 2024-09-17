export type Drink = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
};

export type CocktailDBResponse = {
  drinks: Drink[];
};

export type CocktailProps = {
  drinks: Drink[] | undefined;
};

export type LoaderData = {
  searchTerm: string;
};

export type CocktailCardType = {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
};
