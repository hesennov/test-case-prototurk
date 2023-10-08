import { useState } from "react";
import "./App.css";

const App = () => {
  const [points, setPoints] = useState([]);
  const clickHandle = (e) => {
    setPoints((points) => [
      ...points,
      {
        x: e.clientX,
        y: e.clientY,
      },
    ]);
    console.log(e.clientX, e.clientY);
  };
  const redoClick = (e) => {
    e.stopPropagation();
    const data = [...points];
    data.pop();
    setPoints(data);
  };
  return (
    <div className="screen" onClick={clickHandle}>
      <div className="header">
        <button disabled={points.length === 0} onClick={redoClick}>
          sill
        </button>
      </div>

      {points.map((point) => (
        <div className="point" style={{ left: point.x, top: point.y }}></div>
      ))}
    </div>
  );
};
export default App;
