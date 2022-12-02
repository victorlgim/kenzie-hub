import {
  LiCardPrincipal,
  DivCardPrincipal,
  DivTitleCardPrincipal,
  DivLastCardPrincipal,
  TitleCard,
  NivelCard,
  TrashCard,
} from "./style";

const Cards = ({
  id,
  title,
  status,
  setDeleted,
  setIdentificator,
  reverse,
}) => {
  const openModalDeleted = e => {
    setDeleted(true);
    setIdentificator(id);
  };

  return (
    <LiCardPrincipal id={id} className={reverse}>
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
