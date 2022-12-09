import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ButtonDelete, ButtonModalEdit, DivButtonModalBottom, DivFlexTopModalEdit, DivTopModalEdit, FormModalMainEdit, InputModalEdit, LabelModalEdit, ModalContainerEdit, ModalEditing, RemoveModalEdit, SelectModalEdit, TitleModalEdit } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React from "react";
import { api } from "../../services/api";
import { GlobalContext } from "../../contexts/GlobalContext";
import { formSchemaEdit } from "../../services/schema";
import { Loading } from "../FormRegister/style";
import { deleteToast, editSucess } from "../../services/toast";


const ModalEdit = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(formSchemaEdit) });
   const { setEditing, stt, titling, identificator } = useContext(TechContext)
   const { setSpinner, spinner, spin, setSpin } = useContext(GlobalContext)
   const token = localStorage.getItem('token')

   const onSubmitEdit = async data => {
    try {
      setSpinner(true);
       await api.put(`users/techs/${identificator}`, data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      editSucess();
      setEditing(false)
    } catch (err) {
      setEditing(true)
      setSpinner(false)
    } finally {
      setSpinner(false)     
    }
  }

  const onSubmitDelete = async e => {
    e.preventDefault();
    try {
      setSpin(true);
       await api.delete(`users/techs/${identificator}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      });
      
      deleteToast();
      setEditing(false)
    } catch (err) {} 
    finally {
      setSpin(false)
    }
  }

    return ( 
        <ModalContainerEdit>
          <ModalEditing>
          <DivTopModalEdit>
            <DivFlexTopModalEdit>
              <TitleModalEdit>Editar Tecnologia</TitleModalEdit>
              <RemoveModalEdit onClick={() => setEditing(false)}>X</RemoveModalEdit>
            </DivFlexTopModalEdit>
          </DivTopModalEdit>
  
          <FormModalMainEdit onSubmit={handleSubmit(onSubmitEdit)}>
            <LabelModalEdit>Nome do projeto</LabelModalEdit>
            <InputModalEdit placeholder={titling} disabled />
  
            <LabelModalEdit>Status</LabelModalEdit>
            <SelectModalEdit {...register("status")}>
              <option value={stt} required hidden>{stt}</option>
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </SelectModalEdit>
           <DivButtonModalBottom>
            <ButtonModalEdit type="submit">{spinner ? <Loading src="/spinner.png" /> : "Salvar alterações"}</ButtonModalEdit>
            <ButtonDelete type='submit' onClick={onSubmitDelete}>{spin ? <Loading src="/spinner.png" /> : "Excluir"}</ButtonDelete>
            </DivButtonModalBottom>
          </FormModalMainEdit>
        </ModalEditing>
      </ModalContainerEdit>
      
     );
}
 
export default ModalEdit;