import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;
`;

const Wrapper = styled.div`
  height: 88px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  padding: 0px 50px;
`;
const LogoWrapper = styled.div``;
const LogoImage = styled.img``;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 44px;
  border: 1px solid lightgray;
  border-radius: 6px;
  padding: 5px 10px;
  margin-right: 50px;
`;
const AvatarImage = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  object-fit: cover;
`;
const AvatarName = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin: 0px 6px;
  color: #1e272e;
`;
const Topbar = () => {
  const state = useSelector((state) => state.data);
  console.log(state);
  return (
    <Container>
      <Wrapper>
        <Left>
          <LogoWrapper>
            <LogoImage src="https://cuvette.tech/app/static/media/logo.74bda650.svg" />
          </LogoWrapper>
        </Left>
        <Right>
          <AvatarContainer>
            <AvatarImage src="https://qph.fs.quoracdn.net/main-qimg-2568e6943fea0fb3b801c890b830188a.webp" />
            <AvatarName> Tom Cruise</AvatarName>
          </AvatarContainer>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Topbar;
