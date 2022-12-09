import React from "react";
import { api } from "../../services/api";
import { Loading } from "../FormRegister/style";
import { ButtonModalDelete, DivFlexTopModalDelete, FormMainDeleteModal, DivTopModalDelete, MessageModalDelete, ModalDeleteContainer, ModalDeleted, RemoveModalDelete, TitleModalDelete } from "./style";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { deleteToast } from "../../services/toast";
import { GlobalContext } from "../../contexts/GlobalContext";
import { UserContext } from "../../contexts/UserContext";

const ModalDelete = () => {
  
  const { setDeleted, identificator } = useContext(TechContext)
  const { spinner, setSpinner } = useContext(GlobalContext);
  const { token } = useContext(UserContext)

  const deleteSubmitAtt = async e => {
    e.preventDefault();
    try {
      setSpinner(true);
       await api.delete(`users/techs/${identificator}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      deleteToast();
  
      setDeleted(false)

    } catch (err) {} 
    finally {
      setSpinner(false)
    }
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
    
    </ModalDeleteContainer>
  );
};

export default ModalDelete;
