export type Drink = {
  idDrink: string;
  strDrink: string;
  strDrinkAlternate?: string | null;
  strTags?: string | null;
  strVideo?: string | null;
  strCategory: string;
  strIBA?: string | null;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES?: string | null;
  strInstructionsDE?: string | null;
  strInstructionsFR?: string | null;
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
  id?: string;
  searchTerm: string;
};

export type CocktailCardType = {
  image: string;
  name: string;
  id: string;
  info: string;
  glass: string;
};
