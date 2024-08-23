import { useToggle } from "./useToggle";

export function ToggleExample() {
  const [show, toggle] = useToggle(false);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button className="btn" onClick={toggle}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
}
