import ButtonLogin from "../ButtonLogin/ButtonLogin";
import { DivLogo, Logo, Form,  DivForm, TitleMenu, LabelLogin, DivMainForm, SpanLogin, ButtonRegister, Input, MsgError, DivLoginPrincipal } from "./style";

import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../FormRegister/style";
import { formSchemaLogin } from "../../services/schema";
import { sucessLogin } from "../../services/toast";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

const FormLogin = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(formSchemaLogin) });

  const [ login, setLogin ] = useState(true);
  const { spinner, setSpinner } = useContext(GlobalContext)
  const navigate = useNavigate();

  const onSubmitLogin = async data => {
    try {
      setSpinner(true);
      const response = await api.post("sessions", data);

      sucessLogin();
      setLogin(true);
      
        window.localStorage.setItem("token", JSON.stringify(response.data.token));
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        
        navigate("/dashboard") 

    } catch (err) { 
       setLogin(false); 
       reset() 
  } finally {
    setSpinner(false)
  }
  };

  return (

    <DivLoginPrincipal>
      <DivLogo>
        <Logo src="./logo.png" />
      </DivLogo>

      <DivForm>
        <Form onSubmit={handleSubmit(onSubmitLogin)}>
          <TitleMenu>Login</TitleMenu>
          <DivMainForm>
            <LabelLogin htmlFor="">Email</LabelLogin>
            <Input placeholder="Insira seu email..." onKeyUp={() => setLogin(true)} {...register("email")} />

            <LabelLogin htmlFor="">Senha</LabelLogin>
            <Input type="password" placeholder="Insira sua senha..." onKeyUp={() => setLogin(true)} {...register("password")} />
            {errors.email && <MsgError>{errors.email.message}</MsgError>}
            {!login ? ( <MsgError>Usuário e/ou senha inválidos.</MsgError> ) : <></> }

            <ButtonLogin type="submit"> {spinner ? <Loading src="/spinner.png" /> : "Entrar"} </ButtonLogin>
            <SpanLogin>Ainda não possui uma conta?</SpanLogin>
            <ButtonRegister to="/cadastro">Cadastre-se</ButtonRegister>
          </DivMainForm>
         
        </Form>
      </DivForm>
    </DivLoginPrincipal>

  );
};

export default FormLogin;
