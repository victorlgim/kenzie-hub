import styled from "styled-components";

export const DivEmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DivAnimation = styled.div`
  animation: translateShow 1.4s ease;

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

export const MessageEmpty = styled.h2`
  color: #f8f9fa;
  font-size: 11px;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    font-size: 11px;
    margin-top: 60px;
  }
`;

export const GiphyEmpty = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
