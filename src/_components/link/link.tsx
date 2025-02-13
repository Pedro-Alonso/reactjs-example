"use client";

import { useRef } from "react";
import { BaseLink } from "./link.styles";
import Button from "../button/button";

interface LinkProps {
  href: string;
  text: string;
}

export const Link = ({ href, text }: LinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null);

  const onClick = () => {
    const element = ref.current;
    if (element) {
      element.click();
    }
  };

  return (
    <>
      <Button text={text} onClick={onClick} />
      <BaseLink href={href} ref={ref} />
    </>
  );
};
