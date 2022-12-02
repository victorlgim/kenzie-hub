import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

export const Logo = styled.img`
  width: 101px;
  height: 14px;

  @media (min-width: 1000px) {
    width: 141px;
    height: 23px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  width: 296px;
  min-height: 402.69px;
  background: #212529;
  padding-bottom: 20px;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  display: flex;
  flex-direction: column;

  @media (min-width: 375px) {
    width: 325px;
  }

  @media (min-width: 1005px) {
    width: 369px;
  }
`;

export const DivMainForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const TitleMenu = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 14.439px;
  color: #f8f9fa;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const LabelLogin = styled.label`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 9.772px;
  line-height: 0px;
  color: #f8f9fa;
  margin-bottom: 17px;
`;

export const SpanLogin = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 9.62602px;
  color: #868e96;
  text-align: center;
  display: block;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ButtonRegister = styled(Link)`
  width: 259.9px;
  height: 38.5px;
  background: #868e96;
  border: 1.2182px solid #868e96;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.8347px;
  color: #f8f9fa;
  text-decoration: none;
  text-align: center;
  padding-top: 10px;

  @media (min-width: 375px) {
    width: 270px;
  }

  @media (min-width: 1000px) {
    width: 300px;
  }

  &:hover {
    filter: brightness(0.9)
  }
`;

export const Input = styled.input`
  width: 264.66px;
  height: 38.5px;
  background: #343b41;
  border: none;
  border-radius: 3.20867px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13.0293px;
  color: #f8f9fa;
  outline: none;

  @media (min-width: 375px) {
    width: 270px;
  }

  @media (min-width: 1000px) {
    width: 300px;
  }

  ::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.9865px;
    color: #868e96;
  }

  :focus {
    border: 0.9772px solid #f8f9fa;
  }
`;

export const MsgError = styled.span`
  color: #FF577F;
  font-size: 11px;
  display: block;
  margin: 0 auto;
  margin-left: 0px;
  margin-top: -10px;
  margin-bottom: 10px;
`
export const DivLoginPrincipal = styled.div`

   animation: translateShow 0.4s ease;

   @keyframes translateShow {
    0% {
      opacity: 0;
      transform: translateX(-70%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`