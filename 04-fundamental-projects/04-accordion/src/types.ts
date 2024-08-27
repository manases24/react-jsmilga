export type Questions = {
  id: number;
  title: string;
  info: string;
};

export type SingleQuestionType = {
  id: number;
  title: string;
  info: string;
  activeId: number | null;
  toggleQuestion: (id: number) => void;
};

export type QuestionsProps = {
  questions: Questions[];
  activeId: number | null;
  toggleQuestion: (id: number) => void;
};
