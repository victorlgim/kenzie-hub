import React from "react";
import { Modal, ModalContainer, DivTopModal, DivFlexTopModal, TitleModalAdd, RemoveModalAdd, LabelModalAdd, FormModalMainAdd, InputModalAdd, SelectModalAdd, ButtonModalAdd, ErrorModal, ErrorModalTwo } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Loading } from "../FormRegister/style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";
import { schemaModal } from "../../services/schema";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ApiContext } from "../../contexts/ApiContext";


const ModalAdd = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaModal) });
  const { setClose } = useContext(ModalContext)
  const { spinner } = useContext(GlobalContext)
  const { onSubmitAtt } = useContext(ApiContext)


  const closeModal = () => {
    setClose(false);
  };

  return (

    <ModalContainer>
      <Modal>
        <DivTopModal>
          <DivFlexTopModal>
            <TitleModalAdd>Cadastrar Tecnologia</TitleModalAdd>
            <RemoveModalAdd onClick={closeModal}>X</RemoveModalAdd>
          </DivFlexTopModal>
        </DivTopModal>

        <FormModalMainAdd onSubmit={handleSubmit(onSubmitAtt)}>
          <LabelModalAdd>Nome</LabelModalAdd>
          <InputModalAdd placeholder="Digite uma tecnologia..." {...register("title")} />
          {errors.title && <ErrorModal>{errors.title.message}</ErrorModal>}

          <LabelModalAdd>Selecionar status</LabelModalAdd>
          <SelectModalAdd {...register("status")}>
            <option value="" required hidden>Selecione um nível</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectModalAdd>
          {errors.status && (<ErrorModalTwo>{errors.status.message}</ErrorModalTwo>)}

          <ButtonModalAdd type="submit">{spinner ? <Loading src="/spinner.png" /> : "Cadastrar Tecnologia"}</ButtonModalAdd>
        </FormModalMainAdd>
      </Modal>
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
    </ModalContainer>
  );
};

export default ModalAdd;
