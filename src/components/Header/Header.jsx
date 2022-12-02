import { useNavigate } from "react-router-dom";
import {
  ButtonBackDashboard,
  ContainerDashboard,
  DivHeaderDashboard,
  HeaderDashboard,
  LogoHeaderDashboard,
} from "./style";

const Header = ({ setLoading, setAuth }) => {
  const navigate = useNavigate();

  const exitAccount = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setAuth(false);
      navigate("/");
    }, 1500);
  };
  return (
    <HeaderDashboard>
      <ContainerDashboard>
        <DivHeaderDashboard>
          <LogoHeaderDashboard src="./logo.png" />
          <ButtonBackDashboard onClick={exitAccount}>Sair</ButtonBackDashboard>
        </DivHeaderDashboard>
      </ContainerDashboard>
    </HeaderDashboard>
  );
};

export default Header;
