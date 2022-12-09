import { ContainerDashboard } from "../Header/style";
import { DivHeaderMainSection, TitleHeaderMainSection, ButtonHeaderMainSection, UlMainSection } from "./style";
import Cards from "../Cards/Cards";
import ItemEmpty from "../ItemEmpty/ItemEmpty";
import { DivAnimation } from "../ItemEmpty/style";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { GlobalContext } from "../../contexts/GlobalContext";

const SectionPrincipal = () => {
   const { setClose } = useContext(TechContext)
   const { profile } = useContext(TechContext)
   const { setSpinner } = useContext(GlobalContext)
   const openModal = () => { setClose(true); setSpinner(false) }

  return (
    <ContainerDashboard>

      <DivHeaderMainSection>
        <TitleHeaderMainSection>Tecnologias</TitleHeaderMainSection>
        <ButtonHeaderMainSection onClick={openModal}>
          <img src="./sum.png" alt="add" />
        </ButtonHeaderMainSection>
      </DivHeaderMainSection>

      {
      profile?.techs.length ? 
      (
        <UlMainSection>
          {profile.techs.map(tech => (
            <Cards key={tech.id} id={tech.id} title={tech.title} status={tech.status} />
          ))}
        </UlMainSection>
      ) 
      : 
      (
        <DivAnimation>
          <ItemEmpty />
        </DivAnimation>
      )}

    </ContainerDashboard>
  );
};

export default SectionPrincipal;
