import { EntrySkeletonType } from "contentful";

export interface ProjectFields {
  title: string | null;
  url: string | null;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

export interface ProjectType {
  title: string;
  url: string;
  id: string;
  img?: string;
}

export interface ProjectFields extends EntrySkeletonType {
  fields: {
    title: string;
    url: string;
    image?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
