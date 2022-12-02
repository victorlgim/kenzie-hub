import styled from "styled-components";

export const LiCardPrincipal = styled.li`
  width: 90%;
  height: 48.73px;
  background: #121214;
  border-radius: 4.06066px;
  margin: 0 auto;
  margin-top: 20px;
  animation: translateShow 1.4s ease;

  .reversed {
    animation: translateNow 0.5s ease;
  }

  @keyframes translateNow {
    0% {
      opacity: 1;
      transform: translateX(0%);
    }
    100% {
      opacity: 0;
      transform: translateX(-70%);
    }
  }

  @keyframes smoothShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
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

export const DivCardPrincipal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 13px;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 16px;
  }
`;

export const DivTitleCardPrincipal = styled.div``;

export const DivLastCardPrincipal = styled.div`
  display: flex;
  gap: 30px;
`;

export const TitleCard = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14.2123px;
  color: #f8f9fa;
`;

export const NivelCard = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12.182px;
  color: #868e96;
`;

export const TrashCard = styled.img`
  display: none;
  cursor: pointer;

  @media (min-width: 768px) {
    display: block;
  }
`;