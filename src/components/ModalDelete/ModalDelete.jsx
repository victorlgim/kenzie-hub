import React from "react";
import { api } from "../../services/api";
import { Loading } from "../FormRegister/style";
import { ButtonModalDelete, DivFlexTopModalDelete, FormMainDeleteModal, DivTopModalDelete, MessageModalDelete, ModalDeleteContainer, ModalDeleted, RemoveModalDelete, TitleModalDelete } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { deleteToast } from "../../services/toast";
import { GlobalContext } from "../../contexts/GlobalContext";
import { AuthContext } from "../../contexts/AuthContext";

const ModalDelete = () => {
  const { setDeleted, identificator } = useContext(ModalContext)
  const { spinner, setSpinner } = useContext(GlobalContext);
  const { token } = useContext(AuthContext)

  const deleteSubmitAtt = async e => {
    e.preventDefault();
    try {

      setSpinner(true);
      const response = await api.delete(`users/techs/${identificator}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      deleteToast();
      setTimeout(() => setSpinner(false), 1800);

      setTimeout(() => setDeleted(false), 2100);

    } catch (err) {}
  };

  return (
    <ModalDeleteContainer>
      <ModalDeleted>

        <DivTopModalDelete>
          <DivFlexTopModalDelete>
            <TitleModalDelete>Excluir Tecnologia</TitleModalDelete>
            <RemoveModalDelete onClick={() => setDeleted(false)}>X</RemoveModalDelete>
          </DivFlexTopModalDelete>
        </DivTopModalDelete>

        <FormMainDeleteModal onSubmit={deleteSubmitAtt}>
          <MessageModalDelete> Você deseja remover este item? </MessageModalDelete>
          <ButtonModalDelete type="submit">{spinner ? <Loading src="/spinner.png" /> : "Excluir Tecnologia"}</ButtonModalDelete>
        </FormMainDeleteModal>

      </ModalDeleted>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </ModalDeleteContainer>
  );
};

export default ModalDelete;
