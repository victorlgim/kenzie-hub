import { useForm } from "react-hook-form";
import LabelRegister from "../LabelRegister/LabelRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import { LogoRegister, FormMainRegister, DivHeaderRegister, ButtonBackRegister, TitleMainRegister, SpanMainRegister, ButtonBottom, DivTheWrap, DivWrap, DivTwoWrap, Inputs, MessageError, InputMsk, Loading, Select } from "./style";
import { useNavigate } from "react-router-dom";
import { notify, verify } from "../../services/toast";
import { formSchema } from "../../services/schema";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

const FormRegister = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(formSchema) });
  const { spinner, setSpinner } = useContext(GlobalContext)
  const navigate = useNavigate();

  const onSubmitFunction = async data => {
    try {
      setSpinner(true);
      const response = await api.post("users", data);

      verify();
      navigate("/login")

      return response

    } catch (err) { 
      notify(); 
      reset({ email: "", password: "", passwordConfirmed: "" }); 
  
    } finally {
      setSpinner(false)
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
            <Inputs placeholder="Digite aqui seu email" {...register("email")}/>
            {errors.email && ( <MessageError>{errors.email.message}</MessageError> )}

            <LabelRegister>Senha</LabelRegister>
            <Inputs placeholder="Digite aqui sua senha" type="password" {...register("password")} />
            {errors.password && ( <MessageError>{errors.password.message}</MessageError> )}

            <LabelRegister>Confirmar senha</LabelRegister>
            <Inputs placeholder="Digite aqui sua senha" type="password" {...register("passwordConfirmed")} />
            {errors.passwordConfirmed && (<MessageError>{errors.passwordConfirmed.message}</MessageError>)}
          </DivTwoWrap>

          <DivWrap>
            <LabelRegister>Bio</LabelRegister>
            <Inputs placeholder="Fale sobre você" {...register("bio")} />
            {errors.bio && (<MessageError>{errors.bio.message}</MessageError>)}

            <LabelRegister>Contato</LabelRegister>
            <InputMsk mask="(99) 99999-9999" placeholder="(xx) xxxxx-xxxx" {...register("contact")} />
            {errors.contact && (<MessageError>{errors.contact.message}</MessageError>)}

            <LabelRegister>Selecionar módulo</LabelRegister>

            <Select {...register("course_module")}>
              <option value="" required hidden>Selecione seu módulo</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">Introdução ao Frontend</option>
              <option value="Segundo módulo (Frontend Avançado)">Frontend Avançado</option>
              <option value="Terceiro módulo (Introdução ao Backend)">Introdução ao Backend</option>
              <option value="Quarto módulo (Backend Avançado)">Backend Avançado</option>
            </Select>
            {errors.course_module && (<MessageError>{errors.course_module.message}</MessageError>)}
            <ButtonBottom type="submit">{spinner ? <Loading src="/spinner.png" /> : "Cadastrar"}</ButtonBottom>
          </DivWrap>

        </DivTheWrap>
        
      </FormMainRegister>
    </>
  );
};

export default FormRegister;
