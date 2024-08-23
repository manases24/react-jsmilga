import { useState } from "react";

export function useToggle(defaultValue: boolean): [boolean, () => void] {
  const [show, setShow] = useState<boolean>(defaultValue);

  function handleToggle() {
    setShow((prevShow) => !prevShow);
  }

  return [show, handleToggle];
}
