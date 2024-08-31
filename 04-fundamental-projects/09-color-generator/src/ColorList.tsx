import { SingleColor } from "./SingleColor";
import { nanoid } from "nanoid";
import { ColorListProps } from "./types";
import { Color } from "./types";

export const ColorList = ({ colors }: ColorListProps) => {
  return (
    <section className="colors">
      {colors.map((color: Color, index: number) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
