import styled from "styled-components";
import { RingLoader } from "react-spinners";

export const HeaderDashboard = styled.header`
  border-bottom: 1px solid #212529;
  height: 70px;
  align-items: center;
`;

export const DivHeaderDashboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 17px;
`;

export const LogoHeaderDashboard = styled.img`
  width: 120px;
`;

export const ButtonBackDashboard = styled.button`
  width: 55.49px;
  height: 32px;
  background: #212529;
  border-radius: 4px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: #f8f9fa;
`;

export const ContainerDashboard = styled.div`
  width: 300px;
  margin: 0 auto;

  @media (min-width: 375px) {
    width: 350px;
  }

  @media (min-width: 425px) {
    width: 380px;
  }

  @media (min-width: 768px) {
    width: 700px;
  }
`;

export const BaseLoading = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const LoadingRing = styled(RingLoader)`
  width: 100px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  text-align: center;
`;
