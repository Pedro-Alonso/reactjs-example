import { BaseButton, ButtonWrapper } from "./button.styles";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <BaseButton onClick={onClick}>{text}</BaseButton>
    </ButtonWrapper>
  );
};

export default Button;
