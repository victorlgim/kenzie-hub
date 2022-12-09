import { useContext } from "react";
import { DivLoginPrincipal } from "../../components/FormLogin/style";
import Header from "../../components/Header/Header";
import { BaseLoading, LoadingRing } from "../../components/Header/style";
import ModalAdd from "../../components/ModalAdd/ModalAdd";
import ModalEdit from "../../components/ModalEdit/ModalEdit";
import SectionDashboard from "../../components/SectionDashboard/SectionDashboard";
import SectionPrincipal from "../../components/SectionPrincipal/SectionPrincipal";
import { GlobalContext } from "../../contexts/GlobalContext";
import { TechContext } from "../../contexts/TechContext";


const Dashboard = () => {

  const { close, editing } = useContext(TechContext)
  const { loading } = useContext(GlobalContext);

  return (
    <DivLoginPrincipal>
      {close && <ModalAdd />}
      {editing && <ModalEdit />}
      {loading && <BaseLoading><LoadingRing color="#ff577f" /></BaseLoading>}
      <Header />
      <SectionDashboard />
      <SectionPrincipal />
    </DivLoginPrincipal>
  );
};

export default Dashboard;
