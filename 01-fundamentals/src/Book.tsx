import type { Book as BookType } from "./types";

export function Book({ author, title, img }: BookType) {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
}
