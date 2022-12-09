import React from "react";
import { Modal, ModalContainer, DivTopModal, DivFlexTopModal, TitleModalAdd, RemoveModalAdd, LabelModalAdd, FormModalMainAdd, InputModalAdd, SelectModalAdd, ButtonModalAdd, ErrorModal, ErrorModalTwo } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Loading } from "../FormRegister/style";
import "react-toastify/dist/ReactToastify.css";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";
import { schemaModal } from "../../services/schema";
import { GlobalContext } from "../../contexts/GlobalContext";
import { errModal, sucessModal } from "../../services/toast";
import { api } from "../../services/api";

const ModalAdd = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schemaModal) });
  const { setClose } = useContext(TechContext)
  const { spinner, setSpinner } = useContext(GlobalContext)
  const token = localStorage.getItem('token')

  const onSubmitAtt = async data => {

    try {

      setSpinner(true);
       await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });

      sucessModal();
      setClose(false)


    } catch (err) {
      setClose(true)
      setSpinner(false)
      errModal()
      reset()

    } finally {
      setSpinner(false)
      
    }
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
    </ModalContainer>
  );
  
  }


export default ModalAdd;
