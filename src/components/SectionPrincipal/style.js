import styled from "styled-components";

export const TitleContentSection = styled.h3`
  display: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #f8f9fa;

  @media (min-width: 1000px) {
    display: block;
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const ParagraphContentSection = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  display: none;

  @media (min-width: 1000px) {
    display: block;
  }
`;

export const DivHeaderMainSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleHeaderMainSection = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #f8f9fa;
`;

export const ButtonHeaderMainSection = styled.button`
  width: 32px;
  height: 32px;
  background: #212529;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  img {
    cursor: pointer;
  }
`;

export const UlMainSection = styled.ul`
  width: 100%;
  min-height: 90px;
  padding-bottom: 20px;
  background: #212529;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  animation: translateShow 1s ease;

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
