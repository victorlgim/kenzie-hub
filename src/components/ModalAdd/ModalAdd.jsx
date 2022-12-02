import React, { useState } from "react";
import {
  Modal,
  ModalContainer,
  DivTopModal,
  DivFlexTopModal,
  TitleModalAdd,
  RemoveModalAdd,
  LabelModalAdd,
  FormModalMainAdd,
  InputModalAdd,
  SelectModalAdd,
  ButtonModalAdd,
  ErrorModal,
  ErrorModalTwo,
} from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { Loading } from "../FormRegister/style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ModalAdd = ({ setClose }) => {
  const errModal = () => {
    toast.error("Esta tecnologia está em uso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const sucessModal = () => {
    toast.success("Tecnologia adicionada com sucesso!", {
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

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório*"),

    status: yup.string().required("Campo obrigatório*"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const token = JSON.parse(localStorage.getItem("token"));

  const [loading, setLoading] = useState(false);

  const onSubmitAtt = async data => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      sucessModal();

      setTimeout(() => {
        setLoading(false);
      }, 1800);

      setTimeout(() => {
        setClose(false);
      }, 2100);
    } catch (err) {
      setTimeout(() => {
        setClose(true);
        setLoading(false);
        errModal();
        reset();
      }, 1800);
    }
  };

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
          <InputModalAdd
            placeholder="Digite uma tecnologia..."
            {...register("title")}
          />
          {errors.title && <ErrorModal>{errors.title.message}</ErrorModal>}

          <LabelModalAdd>Selecionar status</LabelModalAdd>
          <SelectModalAdd {...register("status")}>
            <option value="" required hidden>
              Selecione um nível
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </SelectModalAdd>
          {errors.status && (
            <ErrorModalTwo>{errors.status.message}</ErrorModalTwo>
          )}

          <ButtonModalAdd type="submit">
            {loading ? <Loading src="/spinner.png" /> : "Cadastrar Tecnologia"}
          </ButtonModalAdd>
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
