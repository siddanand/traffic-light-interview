import { useContext } from "react";
import nameContext from "./App";

export default function Circle(props) {
  const name = useContext(nameContext);

  return (
    <div
      style={{
        display: props.value.display,
        height: 100,
        width: 100,
        marginTop: "10px",
        borderRadius: "50px",
        backgroundColor:
          props.value.lightIndex == props.value.colorIndex
            ? props.value.color
            : "grey"
      }}
    >
      {name}
    </div>
  );
}
