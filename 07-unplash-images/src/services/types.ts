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
