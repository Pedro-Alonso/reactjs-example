"use client";

import Button from "../button/button";
import { useEffect, useState } from "react";
import { Wrapper } from "./counter.styles";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  // function decrement() {
  //   setCounter(counter - 1);
  // }
  const reset = () => setCounter(0);

  useEffect(() => {
    console.log("Interagiu!");
  });
  // useEffect(function () {
  //   console.log("Interagiu!");
  // });

  useEffect(() => {
    console.log("Montou o Counter");
    return () => {
      console.log("Desmontou o Counter");
    };
  }, []);

  useEffect(() => {
    console.log("Atualizou o Counter: ", counter);
  }, [counter]);

  return (
    <Wrapper>
      <Button text="Zerar" onClick={reset} />
      <Button text="Incrementar" onClick={increment} />
      <Button text="Decrementar" onClick={decrement} />
      <h2>{counter}</h2>
    </Wrapper>
  );
};

export default Counter;
