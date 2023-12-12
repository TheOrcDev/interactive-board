export type Point = {
  x: number;
  y: number;
};

export default function Circle({ x, y }: Point) {
  return <div className="circle" style={{ left: x, top: y }}></div>;
}
