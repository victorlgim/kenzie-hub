import { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import { ContainerDashboard } from "../Header/style";
import { DescModule, DivMainDashboard, Section, TitleDashboard } from "./style";


const SectionDashboard = () => {
  const { profile } = useContext(ApiContext)
  return (
    <Section>
      <ContainerDashboard>
        <DivMainDashboard>
          {profile ? (
            <>
              <TitleDashboard>Olá, {profile.name}</TitleDashboard>
              <DescModule>{profile.course_module}</DescModule>
            </>
          ) : (
            <></>
          )}
        </DivMainDashboard>
      </ContainerDashboard>
    </Section>
  );
};

export default SectionDashboard;
