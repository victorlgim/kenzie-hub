import { ContainerDashboard } from "../Header/style";
import {
  DivHeaderMainSection,
  TitleHeaderMainSection,
  ButtonHeaderMainSection,
  UlMainSection,
} from "./style";
import Cards from "../Cards/Cards";
import { api } from "../../services/api";
import { useEffect, useState } from "react";
import ItemEmpty from "../ItemEmpty/ItemEmpty";
import { DivAnimation } from "../ItemEmpty/style";
import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

const SectionPrincipal = ({
  setDeleted,
  deleted,
  setIdentificator,
  reverse,
  profile,
  setProfile,
}) => {
   const { close, setClose } = useContext(ModalContext)

  const openModal = () => {
    setClose(true);
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("token"));
        const response = await api.get("profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProfile(response.data);
      } catch (err) {}
    };

    getProfile();
  }, [close, deleted]);

  return (
    <ContainerDashboard>
      <DivHeaderMainSection>
        <TitleHeaderMainSection>Tecnologias</TitleHeaderMainSection>
        <ButtonHeaderMainSection onClick={openModal}>
          <img src="./sum.png" alt="add" />
        </ButtonHeaderMainSection>
      </DivHeaderMainSection>

      {profile?.techs.length ? (
        <UlMainSection>
          {profile.techs.map(tech => (
            <Cards
              reverse={reverse}
              setIdentificator={setIdentificator}
              setDeleted={setDeleted}
              key={tech.id}
              id={tech.id}
              title={tech.title}
              status={tech.status}
            />
          ))}
        </UlMainSection>
      ) : (
        <DivAnimation>
          <ItemEmpty />
        </DivAnimation>
      )}
    </ContainerDashboard>
  );
};

export default SectionPrincipal;
