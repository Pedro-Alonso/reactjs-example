"use client";

import { Link } from "@/_components/link/link";
import { Wrapper } from "./home.styles";

const Home = () => {
  return (
    <Wrapper>
      <h1>Home</h1>
      <Link text="Ir para o contador" href={"/contador"} />
    </Wrapper>
  );
};

export default Home;
