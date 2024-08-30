import { MovieType } from "../types"

export const Movie = ({movie}: MovieType[]) => {
  return (
 <li>
    <img src={movie.Poster} alt="" />
 </li>
  )
}
