import styled from "styled-components";

export const ButtonWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  background-color: #333;
  width: 250px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #555;
  }

  &:active {
    background-color: #777;
  }
`;

export const BaseButton = styled.button`
  color: #fff;
  border: none;
  background: none;
  cursor: pointer;
`;
