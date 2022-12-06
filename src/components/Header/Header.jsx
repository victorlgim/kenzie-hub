import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ButtonBackDashboard, ContainerDashboard, DivHeaderDashboard, HeaderDashboard, LogoHeaderDashboard } from "./style";

const Header = () => {

  const { exitAccount } = useContext(AuthContext)

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
