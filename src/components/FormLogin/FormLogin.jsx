import ButtonLogin from "../ButtonLogin/ButtonLogin";
// import InputLogin from "../InputLogin/InputLogin";
import {
  DivLogo,
  Logo,
  Form,
  DivForm,
  TitleMenu,
  LabelLogin,
  DivMainForm,
  SpanLogin,
  ButtonRegister,
  Input,
  MsgError,
  DivLoginPrincipal,
} from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../FormRegister/style";

const FormLogin = ({ setAuth }) => {
  const sucessLogin = () => {
    toast.success("Login realizado com sucesso!", {
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
    email: yup
      .string()
      .required("Email obrigatório")
      .email("É necessário fornecer um email válido."),

    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [login, setLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitLogin = async data => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);

      sucessLogin();
      setLogin(true);
      setTimeout(() => {
        window.localStorage.setItem(
          "token",
          JSON.stringify(response.data.token)
        );
        window.localStorage.setItem("user", JSON.stringify(response.data.user));
        setAuth(true);
        navigate("/dashboard");
      }, 3000);
    } catch (err) {
      setTimeout(() => {
        setLogin(false);
        setLoading(false);
        reset();
      }, 2000);
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
            <Input
              placeholder="Insira seu email..."
              onKeyUp={() => setLogin(true)}
              {...register("email")}
            />

            <LabelLogin htmlFor="">Senha</LabelLogin>
            <Input
              type="password"
              placeholder="Insira sua senha..."
              onKeyUp={() => setLogin(true)}
              {...register("password")}
            />
            {errors.email && <MsgError>{errors.email.message}</MsgError>}
            {!login ? (
              <MsgError>Usuário e/ou senha inválidos.</MsgError>
            ) : (
              <></>
            )}

            <ButtonLogin type="submit">
              {loading ? <Loading src="/spinner.png" /> : "Entrar"}
            </ButtonLogin>
            <SpanLogin>Ainda não possui uma conta?</SpanLogin>
            <ButtonRegister to="/cadastro">Cadastre-se</ButtonRegister>
          </DivMainForm>
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
        </Form>
      </DivForm>
    </DivLoginPrincipal>
  );
};

export default FormLogin;
