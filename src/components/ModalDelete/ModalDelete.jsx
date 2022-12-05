import React, { useState } from "react";
import { api } from "../../services/api";
import { Loading } from "../FormRegister/style";
import { ButtonModalDelete, DivFlexTopModalDelete, FormMainDeleteModal, DivTopModalDelete, MessageModalDelete, ModalDeleteContainer, ModalDeleted, RemoveModalDelete, TitleModalDelete } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";


const ModalDelete = () => {
  const deleteToast = () => {
    toast.success("Tecnologia removida com sucesso!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const { setDeleted, identificator, setReverse } = useContext(ModalContext)

  const [loading, setLoading] = useState(false);

  const closeDeleted = () => {
    setDeleted(false);
  };

  const token = JSON.parse(localStorage.getItem("token"));

  const DeleteSubmitAtt = async e => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await api.delete(`users/techs/${identificator}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      deleteToast();
      setReverse("reversed");
      setTimeout(() => {
        setLoading(false);
      }, 1800);

      setTimeout(() => {
        setDeleted(false);
        setReverse(null);
      }, 2100);
    } catch (err) {}
  };

  return (
    <ModalDeleteContainer>
      <ModalDeleted>
        
        <DivTopModalDelete>
          <DivFlexTopModalDelete>
            <TitleModalDelete>Excluir Tecnologia</TitleModalDelete>
            <RemoveModalDelete onClick={closeDeleted}>X</RemoveModalDelete>
          </DivFlexTopModalDelete>
        </DivTopModalDelete>

        <FormMainDeleteModal onSubmit={DeleteSubmitAtt}>
          <MessageModalDelete> Você deseja remover este item? </MessageModalDelete>
          <ButtonModalDelete type="submit">{loading ? <Loading src="/spinner.png" /> : "Excluir Tecnologia"}</ButtonModalDelete>
        </FormMainDeleteModal>

      </ModalDeleted>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ModalDeleteContainer>
  );
};

export default ModalDelete;
