import { SingleQuestion } from "./SingleQuestion";
import { QuestionsProps } from "./types";

export function Questions({
  questions,
  activeId,
  toggleQuestion,
}: QuestionsProps) {
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
}
