import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Logo from "../logo";
import { NavItems } from "./navItems";

const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`flex flex-row items-center justify-between w-full max-w-screen-2xl lg:px-12`}
`;
const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo />
      <NavItems />
    </NavbarContainer>
  );
};

export default Navbar;
