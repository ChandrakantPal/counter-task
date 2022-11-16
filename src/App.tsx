import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    if (start) {
      const interval = setTimeout(() => {
        setCount((current) => current + 1);
      }, 1000);
      return () => {
        clearTimeout(interval);
      };
    }
  }, [start, count]);

  return (
    <>
      <p className="count">Counter </p>
      <p className="count">{count}</p>
      <button
        onClick={() => {
          setStart((current) => !current);
        }}
        className="button"
      >
        {start ? "Pause" : "Start"}
      </button>
      <button
        onClick={() => {
          setStart(false);
          setCount(0);
        }}
        className="button"
      >
        Reset
      </button>
    </>
  );
}

export default App;
