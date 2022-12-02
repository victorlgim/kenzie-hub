import styled from "styled-components";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

export const DivHeaderRegister = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin-bottom: 30px;

  @media (min-width: 1000px) {
    width: 650px;
    font-size: 22px;
  }
`;
export const LogoRegister = styled.img`
  @media (min-width: 1000px) {
    width: 140px;
  }

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
`;

export const ButtonBackRegister = styled(Link)`
  width: 70.54px;
  height: 26.95px;
  background: #212529;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 9.59437px;
  text-align: center;
  border: none;
  color: #f8f9fa;
  text-decoration: none;
  padding-top: 8px;

  @media (min-width: 1000px) {
    width: 120px;
    font-size: 13px;
    height: 32px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

export const FormMainRegister = styled.form`
  width: 280.83px;
  min-height: 709.96px;
  background: #212529;
  box-shadow: 0px 3.19812px 31.9812px -7.99531px rgba(0, 0, 0, 0.25);
  border-radius: 3.19812px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  padding-bottom: 25px;

  @media (min-width: 375px) {
    width: 320px;
  }

  @media (min-width: 1000px) {
    width: 650px;
    min-height: 450px;
  }
`;

export const TitleMainRegister = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14.3916px;
  color: #f8f9fa;
  text-align: center;
  padding-top: 40px;

  @media (min-width: 1000px) {
    width: 650px;
    font-size: 22px;
    margin-top: -5px;
  }
`;

export const SpanMainRegister = styled.span`
  display: block;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 9.59437px;
  color: #868e96;
  text-align: center;
  margin-top: 25px;

  @media (min-width: 1000px) {
    font-size: 12px;
  }
`;

export const ButtonBottom = styled.button`
  width: 259.9px;
  margin: 0 auto;
  height: 38.5px;
  background: #ff577f;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.8347px;
  color: #ffffff;
  margin-top: 24px;
  text-align: center;

  @media (min-width: 375px) {
    width: 270px;
  }

  @media (min-width: 1000px) {
    width: 270px;
    margin-left: 32px;
    margin-top: 38px;
  }
`;

export const DivTheWrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    flex-direction: row;
    margin-left: 7px;
  }
`;

export const DivWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivTwoWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Inputs = styled.input`
  width: 256.79px;
  height: 38.38px;
  background: #343b41;
  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;
  margin: 0 auto;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  outline: none;
  font-size: 13.0293px;
  color: #f8f9fa;
  border: none;

  @media (min-width: 375px) {
    width: 275px;
  }

  @media (min-width: 1000px) {
    margin-left: 30px;
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

export const InputMsk = styled(InputMask)`
  width: 256.79px;
  height: 38.38px;
  background: #343b41;
  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;
  margin: 0 auto;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  outline: none;
  font-size: 13.0293px;
  color: #f8f9fa;
  border: none;

  @media (min-width: 375px) {
    width: 275px;
  }

  @media (min-width: 1000px) {
    margin-left: 30px;
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

export const MessageError = styled.span`
  color: #ff577f;
  font-size: 11px;
  display: block;
  margin: 0 auto;
  margin-left: 14px;
  margin-top: 4px;

  @media (min-width: 375px) {
    margin-left: 23px;
  }

  @media (min-width: 1000px) {
    margin-left: 30px;
    margin-bottom: -8px;
  }
`;

export const Select = styled.select`
  width: 256.79px;
  height: 38.38px;
  background: #343b41;
  border: 0.973988px solid #343b41;
  border-radius: 3.19812px;
  margin: 0 auto;
  padding-left: 10px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  outline: none;
  font-size: 13.0293px;
  color: #f8f9fa;
  border: none;

  @media (min-width: 375px) {
    width: 275px;
  }

  @media (min-width: 1000px) {
    margin-left: 30px;
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

export const Loading = styled.img`
  animation: loading 1.5s infinite;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
