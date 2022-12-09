import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TechContext } from "../../contexts/TechContext";
import { LiCardPrincipal, DivCardPrincipal, DivTitleCardPrincipal, DivLastCardPrincipal, TitleCard, NivelCard, TrashCard, EditCard } from "./style";


const Cards = ({ id, title, status}) => {

  const { setDeleted, setIdentificator, setEditing, setStt, setTitling } = useContext(TechContext)
  const { setSpinner } = useContext(GlobalContext)
  const openModalDeleted = () => { setDeleted(true); setIdentificator(id); setSpinner(false) }
  const openModalEditing = () => { setEditing(true); setIdentificator(id); setSpinner(false); setStt(status); setTitling(title) }

  return (
    <LiCardPrincipal id={id} >

      <DivCardPrincipal>

        <DivTitleCardPrincipal>   
          <TitleCard>{title}</TitleCard>     
        </DivTitleCardPrincipal>

        <DivLastCardPrincipal>
          <NivelCard>{status}</NivelCard>
          <EditCard id={id} src="./edit.png" onClick={openModalEditing}/>
          <TrashCard id={id} src="./trash.png" onClick={openModalDeleted} />
        </DivLastCardPrincipal>

      </DivCardPrincipal>

    </LiCardPrincipal>
  );
};

export default Cards;
