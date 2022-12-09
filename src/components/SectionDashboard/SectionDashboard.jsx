import { useEffect } from "react";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { api } from "../../services/api";
import { ContainerDashboard } from "../Header/style";
import { DescModule, DivMainDashboard, Section, TitleDashboard } from "./style";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";


const SectionDashboard = () => {

  const { profile, setProfile } = useContext(TechContext)
  const { close, editing } = useContext(TechContext)
  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await api.get("profile", { 
            headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },});
       setProfile(response.data);
       console.log(response.data)
      } catch (err) {
        localStorage.clear()
        navigate('/login')
      } 
    };

    getProfile();
  }, [close, editing]);

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
