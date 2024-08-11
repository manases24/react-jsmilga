export type DataType = {
  id: number;
  name: string;
};

export type PeopleType = {
  id: number;
  name: string;
  nickName?: string;
  images?: {
    small: {
      url: string;
    };
  }[];
};
