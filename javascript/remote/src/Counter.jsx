import React, { useState } from "react";

export default function Counter({ app }) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-blue-500">
      <div>Counter: {count}</div>
      <div>{app.name}</div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Add to Count
        </button>
      </div>
    </div>
  );
}
