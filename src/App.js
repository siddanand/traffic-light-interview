import "./styles.css";
import { useState, useEffect, useContext, createContext } from "react";
import Circle from "./circle";

const nameContext = createContext({ name: "sidd" });

export default function App() {
  const [name, setName] = useState("sidd");

  const light = [
    { color: "red", duration: 4000 },
    { color: "yellow", duration: 2000 },
    { color: "green", duration: 3000 }
  ];
  const [color, setColor] = useState(0);
  useEffect(() => {
    switchColor();
  });

  const switchColor = () => {
    setTimeout(() => {
      if (color < light.length - 1) {
        setColor((color) => color + 1);
      } else {
        setColor(0);
      }
    }, light[color]?.duration);
  };

  return (
    <div className="App">
      Common Things: Color, time, array of circles
      {light.map((item, index) => {
        return (
          <nameContext.Provider value={{ name: name, setName: setName }}>
            <Circle
              value={{
                lightIndex: index,
                colorIndex: color,
                display: "block",
                color: item.color
              }}
            />
          </nameContext.Provider>
        );
      })}
      {light.map((item, index) => {
        return (
          <Circle
            value={{
              lightIndex: index,
              colorIndex: color,
              display: "inline-block",
              color: item.color
            }}
          />
        );
      })}
    </div>
  );
}
