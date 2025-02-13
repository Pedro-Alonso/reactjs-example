import styled from "styled-components";
import Link from "next/link";

export const LinkWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: #333;
  width: 250px;
  cursor: pointer;
  text-align: center;
`;

export const BaseLink = styled(Link)`
  display: none;
`;
