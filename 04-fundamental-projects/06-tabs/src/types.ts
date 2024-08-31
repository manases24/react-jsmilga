export type JobType = {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

export type BtnContainerProps = {
  jobs: JobType[];
  currentItem: number;
  setCurrentItem: (index: number) => void;
};
