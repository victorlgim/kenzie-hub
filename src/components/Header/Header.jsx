import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ButtonBackDashboard, ContainerDashboard, DivHeaderDashboard, HeaderDashboard, LogoHeaderDashboard } from "./style";

const Header = () => {

  const { exitAccount } = useContext(UserContext)

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
