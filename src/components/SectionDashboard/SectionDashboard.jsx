import { useEffect } from "react";
import { useContext } from "react";
import { ApiContext } from "../../contexts/ApiContext";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalContext } from "../../contexts/ModalContext";
import { api } from "../../services/api";
import { ContainerDashboard } from "../Header/style";
import { DescModule, DivMainDashboard, Section, TitleDashboard } from "./style";

const SectionDashboard = () => {

  const { profile, setProfile } = useContext(ApiContext)
  const { close, deleted } = useContext(ModalContext)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("profile", { 
            headers: {
            Authorization: `Bearer ${token}`,
          },});
       setProfile(response.data);
      } catch (err) {}
    };

    getProfile();
  }, [close, deleted]);

  return (
    <Section>
      <ContainerDashboard>
        <DivMainDashboard>

          {profile ? 
          (
            <>
              <TitleDashboard>Olá, {profile.name}</TitleDashboard>
              <DescModule>{profile.course_module}</DescModule>
            </>
          )         
          : 
          (
            <></>
          )}

        </DivMainDashboard>
      </ContainerDashboard>
    </Section>
  );
};

export default SectionDashboard;
