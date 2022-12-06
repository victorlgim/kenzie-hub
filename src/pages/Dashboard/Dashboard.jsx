import { useContext } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DivLoginPrincipal } from "../../components/FormLogin/style";
import Header from "../../components/Header/Header";
import { BaseLoading, LoadingRing } from "../../components/Header/style";
import ModalAdd from "../../components/ModalAdd/ModalAdd";
import ModalDelete from "../../components/ModalDelete/ModalDelete";
import SectionDashboard from "../../components/SectionDashboard/SectionDashboard";
import SectionPrincipal from "../../components/SectionPrincipal/SectionPrincipal";
import { ModalContext } from "../../contexts/ModalContext";


const Dashboard = ({ auth, setAuth }) => {

  const {close, deleted} = useContext(ModalContext)
  
  const [loading, setLoading] = useState(false);


 

  return (
    <DivLoginPrincipal>
      {deleted && (<ModalDelete />)}
      {close && <ModalAdd />}
      {loading && (<BaseLoading><LoadingRing color="#ff577f" /></BaseLoading>)}
      <Header setLoading={setLoading} setAuth={setAuth} />
      <SectionDashboard />
      <SectionPrincipal />
    </DivLoginPrincipal>
  );
};

export default Dashboard;
