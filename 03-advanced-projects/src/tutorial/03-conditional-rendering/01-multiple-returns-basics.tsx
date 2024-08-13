import { useEffect, useState } from "react";

export function MultipleReturnsBasics() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // done fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  // can return entire app
  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return <h2>My App</h2>;
}


