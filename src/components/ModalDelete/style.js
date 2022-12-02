import styled from "styled-components";

export const ModalDeleteContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalDeleted = styled.div`
  position: relative;
  width: 290px;
  height: 200px;
  border-radius: var(--border-radius-1);
  box-shadow: 2px 5px 15px 5px rgba(0, 0, 0, 0.31);
  animation: transition 1.4s ease;
  background: #212529;
  box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
  border-radius: 3.20867px;
  top: 80px;
  transition: 0.2s ease;

  z-index: 9999;

  @media (min-width: 375px) {
    width: 330px;
  }

  @media (min-width: 425px) {
    width: 380px;
  }

  @media (min-width: 768px) {
    width: 440px;
  }

  @media (min-width: 1000px) {
    top: 100px;
  }

  @keyframes transition {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`;

export const DivTopModalDelete = styled.div`
  background: #343b41;
  border-radius: 3.20867px 3.20867px 0px 0px;
  height: 50.11px;
  width: 100%;
  margin: 0 auto;
  border-radius: 3.20867px 3.20867px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivFlexTopModalDelete = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
`;

export const TitleModalDelete = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12.2304px;
  color: #f8f9fa;
`;

export const RemoveModalDelete = styled.button`
  font-weight: 600;
  font-size: 12.8347px;
  color: #868e96;
  border: none;
  width: 20px;
  background: transparent;
`;

export const FormMainDeleteModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
`;

export const MessageModalDelete = styled.h3`
  font-size: 20px;
  color: #f8f9fa;
  font-family: "Inter";
  text-align: center;
`;

export const ButtonModalDelete = styled.button`
  height: 38.5px;
  background: #ff577f;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12.8347px;
  color: #ffffff;
  border: 1.2182px solid #ff577f;
  border-radius: 4.06066px;
  margin: 0 auto;
  margin-top: 30px;
  text-align: center;
  width: 40%;
`;
