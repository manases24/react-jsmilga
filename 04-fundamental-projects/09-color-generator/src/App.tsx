import { useState } from "react";
import { Form } from "./Form";
import Values from "values.js";
import { toast, ToastContainer } from "react-toastify";
import { ColorList } from "./ColorList";

function App() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color: string) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  );
}

export default App;
