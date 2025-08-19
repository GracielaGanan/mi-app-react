import { useState } from "react";
import { Button } from "./components/Button";

export default function Counter() {
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="max-w-md mx-auto p-8 my-10 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl mb-4 text-gray-800">Contador: {count}</h1>
      <div className="flex gap-3">
        <Button variant="outline" onClick={decrement}>
          Restar
        </Button>
        <Button variant="destructive" onClick={reset}>
          Reiniciar
        </Button>
        <Button variant="primary" onClick={increment}>
          Sumar
        </Button>
      </div>
    </div>
  );
}



