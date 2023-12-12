import { useState } from "react";
import "./App.css";
import Circle, { Point } from "./Circle";

function App() {
  const [points, setPoints] = useState<Point[]>([]);
  const [undoedPoints, setUndoedPoints] = useState<Point[]>([]);

  // Undo
  const handleUndo = () => {
    const newPoints = [...points];
    const newUndoedPoints = newPoints.pop();
    if (!newUndoedPoints) return;
    setUndoedPoints([...undoedPoints, newUndoedPoints]);
    setPoints(newPoints);
  };

  // Redo
  const handleRedo = () => {
    const newUndoedPoints = [...undoedPoints];
    const newPoints = newUndoedPoints.pop();
    if (!newPoints) return;
    setPoints([...points, newPoints]);
    setUndoedPoints(newUndoedPoints);
  };

  // Clickable div
  const createCircle = (event: React.MouseEvent) => {
    const { pageX, pageY } = event;
    setPoints([...points, { x: pageX, y: pageY }]);
    console.log({ pageX, pageY });
  };
  return (
    <>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
      <div className="main" onClick={createCircle}></div>
      {points.map((point: Point, index: number) => (
        <Circle x={point.x} y={point.y} key={index} />
      ))}
    </>
  );
}

export default App;
