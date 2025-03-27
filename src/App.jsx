/* eslint-disable react-refresh/only-export-components */
import "react";
import { observer } from "mobx-react";
import "./App.css";
import { useCounterStore } from "./context/counterContext";

function App() {
  const myCount = useCounterStore();

  return (
    <div style={{ textAlign: "center", padding: 16 }}>
      카운트: {myCount.count}
      <br />
      <br />
      마이너스?: {myCount.isNegative}
      <br />
      <br />
      <button onClick={() => myCount.increase()}>+</button>
      <button onClick={() => myCount.decrease()}>-</button>
    </div>
  );
}

export default observer(App);
