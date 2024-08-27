import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { SingleQuestionType } from "./types";

export function SingleQuestion({
  id,
  title,
  info,
  activeId,
  toggleQuestion,
}: SingleQuestionType) {
  // Verifica si esta pregunta es la activa comparando el ID
  const isActive = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive && <p>{info}</p>}
    </article>
  );
}
