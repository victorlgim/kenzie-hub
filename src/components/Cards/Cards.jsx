import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ModalContext } from "../../contexts/ModalContext";
import { LiCardPrincipal, DivCardPrincipal, DivTitleCardPrincipal, DivLastCardPrincipal, TitleCard, NivelCard, TrashCard } from "./style";


const Cards = ({ id, title, status}) => {

  const { setDeleted, setIdentificator } = useContext(ModalContext)
  const { setSpinner } = useContext(GlobalContext)
  const openModalDeleted = () => { setDeleted(true); setIdentificator(id); setSpinner(false) };

  return (
    <LiCardPrincipal id={id} >

      <DivCardPrincipal>

        <DivTitleCardPrincipal>   
          <TitleCard>{title}</TitleCard>     
        </DivTitleCardPrincipal>

        <DivLastCardPrincipal>
          <NivelCard>{status}</NivelCard>
          <TrashCard id={id} src="./trash.png" onClick={openModalDeleted} />
        </DivLastCardPrincipal>

      </DivCardPrincipal>

    </LiCardPrincipal>
  );
};

export default Cards;
