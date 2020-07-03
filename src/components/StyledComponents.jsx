import React from "react";
import styled from "styled-components";

const LoginBgImage = styled.div`
  background-image: url("https://fplogoimages.withfloats.com/actual/5eaffa109e9d0c0001ea459b.png");
  height: 100vh;
  background-repeat: no-repeat;
`;
const TwoDivsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 21%;
  margin-right: 1%;
`;
const DivFlexStartLeft = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: left;
  margin-left: 21%;
  margin-right: 1%;
`;
const DivFlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DivFiftyPerCentWidth = styled.div`
  width: 50%;
`;
const DivHundredPerCentWidth = styled.div`
  width: 100%;
  text-align: center;
`;
const H6NoMargin = styled.h6`
  margin: none;
`;

export {
  DivFiftyPerCentWidth,
  DivFlexBetween,
  DivFlexStartLeft,
  DivHundredPerCentWidth,
  H6NoMargin,
  LoginBgImage,
  TwoDivsWrapper,
};
