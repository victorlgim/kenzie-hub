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
import { errModal, sucessModal } from "../../services/toast";
import { AuthContext } from "../../contexts/AuthContext";
import { api } from "../../services/api";

const ModalAdd = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schemaModal) });
  const { setClose } = useContext(ModalContext)
  const { spinner, setSpinner } = useContext(GlobalContext)
  const { token } = useContext(AuthContext)

  const onSubmitAtt = async data => {

    try {
      setSpinner(true);
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      sucessModal();

      setTimeout(() => setSpinner(false), 1800);

      setTimeout(() => setClose(false), 2100);


    } catch (err) {

      setTimeout(() => { setClose(true); setSpinner(false); errModal() }, 1800);

    }

  return (

    <ModalContainer>
      <Modal>
        <DivTopModal>
          <DivFlexTopModal>
            <TitleModalAdd>Cadastrar Tecnologia</TitleModalAdd>
            <RemoveModalAdd onClick={() => setClose(false)}>X</RemoveModalAdd>
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
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </ModalContainer>
  );
  }}


export default ModalAdd;
