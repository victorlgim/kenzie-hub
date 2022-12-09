import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TechContext } from "../../contexts/TechContext";
import { LiCardPrincipal, DivCardPrincipal, DivTitleCardPrincipal, DivLastCardPrincipal, TitleCard, NivelCard } from "./style";


const Cards = ({ id, title, status}) => {

  const { setIdentificator, setEditing, setStt, setTitling } = useContext(TechContext)
  const { setSpinner } = useContext(GlobalContext)
  const openModalEditing = () => { setEditing(true); setIdentificator(id); setSpinner(false); setStt(status); setTitling(title) }

  return (
    <LiCardPrincipal id={id} onClick={openModalEditing}>

      <DivCardPrincipal>

        <DivTitleCardPrincipal>   
          <TitleCard>{title}</TitleCard>     
        </DivTitleCardPrincipal>

        <DivLastCardPrincipal>
          <NivelCard>{status}</NivelCard>
        </DivLastCardPrincipal>

      </DivCardPrincipal>

    </LiCardPrincipal>
  );
};

export default Cards;
