import { useNavigate } from "react-router-dom";
import { ContainerDashboard } from "../Header/style";
import { DescModule, DivMainDashboard, Section, TitleDashboard } from "./style";

const SectionDashboard = ({ profile }) => {
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
