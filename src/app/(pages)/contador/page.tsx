"use client";

import { Link } from "@/_components/link/link";
import Counter from "@/_components/counter/counter";
import { Wrapper } from "./contador.styles";

export default function Contador() {
  return (
    <Wrapper>
      <h1 className="text-3xl font-bold underline text-blue-700">Contador</h1>
      <Link href={"/"} text="Voltar para Home" />
      <Counter />
    </Wrapper>
  );
}
