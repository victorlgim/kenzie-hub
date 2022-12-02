import { useForm } from "react-hook-form";
import LabelRegister from "../LabelRegister/LabelRegister";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LogoRegister,
  FormMainRegister,
  DivHeaderRegister,
  ButtonBackRegister,
  TitleMainRegister,
  SpanMainRegister,
  ButtonBottom,
  DivTheWrap,
  DivWrap,
  DivTwoWrap,
  Inputs,
  MessageError,
  InputMsk,
  Loading,
  Select,
} from "./style";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FormRegister = () => {
  const notify = () => {
    toast.error("Email já existente!", {
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

  const verify = () => {
    toast.success("Cadastro efetuado com sucesso!", {
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
    name: yup
      .string()
      .required("Nome obrigatório")
      .min(3, "O nome precisa ter pelo menos 3 caracteres.")
      .max(200, "O nome pode ter no máximo 200 caracteres."),

    email: yup
      .string()
      .required("Email obrigatório")
      .email("É necessário fornecer um email válido."),

    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
      .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
      .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
      .matches(
        /(?=.*?[#?!@$%^&*-])/,
        "É necessário pelo menos um caractere especial."
      )
      .min(8, "É necessário uma senha de pelo menos 8 caracteres."),

    passwordConfirmed: yup
      .string()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem"),

    bio: yup.string().required("Bio obrigatória"),

    contact: yup.string().required("Contato obrigatório"),

    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onSubmitFunction = async data => {
    try {
      setLoading(true);
      const response = await api.post("users", data);

      verify();
      setTimeout(() => {
        setLoading(false);
      }, 2700);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (err) {
      notify();
      reset({
        email: "",
        password: "",
        passwordConfirmed: "",
      });
      setLoading(false);
    }
  };

  return (
    <>
      <DivHeaderRegister>
        <LogoRegister src="./logo.png" />
        <ButtonBackRegister to="/login">Voltar</ButtonBackRegister>
      </DivHeaderRegister>

      <FormMainRegister onSubmit={handleSubmit(onSubmitFunction)}>
        <TitleMainRegister>Crie sua conta</TitleMainRegister>
        <SpanMainRegister>Rapido e grátis, vamos nessa</SpanMainRegister>
        <DivTheWrap>
          <DivTwoWrap>
            <LabelRegister>Nome</LabelRegister>
            <Inputs placeholder="Digite aqui seu nome" {...register("name")} />
            {errors.name && <MessageError>{errors.name.message}</MessageError>}

            <LabelRegister>Email</LabelRegister>
            <Inputs
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            {errors.email && (
              <MessageError>{errors.email.message}</MessageError>
            )}

            <LabelRegister>Senha</LabelRegister>
            <Inputs
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <MessageError>{errors.password.message}</MessageError>
            )}

            <LabelRegister>Confirmar senha</LabelRegister>
            <Inputs
              placeholder="Digite aqui sua senha"
              type="password"
              {...register("passwordConfirmed")}
            />
            {errors.passwordConfirmed && (
              <MessageError>{errors.passwordConfirmed.message}</MessageError>
            )}
          </DivTwoWrap>
          <DivWrap>
            <LabelRegister>Bio</LabelRegister>
            <Inputs placeholder="Fale sobre você" {...register("bio")} />

            <LabelRegister>Contato</LabelRegister>
            <InputMsk
              mask="(99) 99999-9999"
              placeholder="(xx) xxxxx-xxxx"
              {...register("contact")}
            />

            <LabelRegister>Selecionar módulo</LabelRegister>

            <Select {...register("course_module")}>
              <option value="" required hidden>
                Selecione seu módulo
              </option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Introdução ao Frontend
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Frontend Avançado
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Introdução ao Backend
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Backend Avançado
              </option>
            </Select>
            {errors.course_module && (
              <MessageError>{errors.course_module.message}</MessageError>
            )}
            <ButtonBottom type="submit">
              {loading ? <Loading src="/spinner.png" /> : "Cadastrar"}
            </ButtonBottom>
          </DivWrap>
        </DivTheWrap>
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
      </FormMainRegister>
    </>
  );
};

export default FormRegister;
