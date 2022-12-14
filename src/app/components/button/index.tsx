import React, { FC } from "react";
import styled from "styled-components";
import tw from "twin.macro";
interface IButtonProps {
  theme: "filled" | "outlined";
  text: string;
}
const BaseButton = styled.button`
  ${tw`px-5 py-3 m-1 text-xs font-semibold text-white transition-all duration-200 ease-in-out border-2 border-transparent border-solid rounded-md outline-none focus:outline-none`}
`;

const OutlinedButton = styled(BaseButton)`
  ${tw`bg-red-500 hover:bg-transparent hover:text-red-500 hover:border-red-500`}
`;
const FilledButton = styled(BaseButton)`
  ${tw`text-red-500 bg-transparent border-red-500 hover:bg-red-500 hover:text-white hover:border-transparent`}
`;

const Button: FC<IButtonProps> = (props) => {
  const { theme = "filled", text } = props;
  if (theme === "outlined") {
    return <OutlinedButton>{text}</OutlinedButton>;
  }
  return <FilledButton>{text}</FilledButton>;
};

export default Button;
