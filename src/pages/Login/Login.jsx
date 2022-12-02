import FormLogin from "../../components/FormLogin/FormLogin";
import { DivLoginPrincipal } from "../../components/FormLogin/style";

const Login = ({ setAuth }) => {
  return (
    <>
      <DivLoginPrincipal>
        <FormLogin setAuth={setAuth} />
      </DivLoginPrincipal>
    </>
  );
};

export default Login;
