import styled from "styled-components";

export const Section = styled.section`
  border-bottom: 1px solid #212529;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    height: 80px;
  }
`;

export const DivMainDashboard = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

export const TitleDashboard = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #f8f9fa;
  margin-top: 34px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const DescModule = styled.span`
  font-family: "Inter";
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #868e96;
  margin-bottom: 34px;

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
