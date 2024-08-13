import { useState } from "react";

export function ShortCircuitExamples() {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("susan");
  const [user, setUser] = useState({ name: "john" });
  const [isEditing, setIsEditing] = useState(false);

  return <h2>short circuit - examples</h2>;
}
