import { ContainerDashboard } from "../Header/style";
import { DivHeaderMainSection, TitleHeaderMainSection, ButtonHeaderMainSection, UlMainSection } from "./style";
import Cards from "../Cards/Cards";
import ItemEmpty from "../ItemEmpty/ItemEmpty";
import { DivAnimation } from "../ItemEmpty/style";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { ApiContext } from "../../contexts/ApiContext";


const SectionPrincipal = () => {
   const { setClose } = useContext(ModalContext)
   const { profile } = useContext(ApiContext)

  return (
    <ContainerDashboard>

      <DivHeaderMainSection>
        <TitleHeaderMainSection>Tecnologias</TitleHeaderMainSection>
        <ButtonHeaderMainSection onClick={() => setClose(true)}>
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
