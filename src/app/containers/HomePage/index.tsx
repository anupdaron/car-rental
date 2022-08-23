import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Navbar from "../../components/navbar";
import TopSection from "./topSection";

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;
const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
    </PageContainer>
  );
};

export default HomePage;
