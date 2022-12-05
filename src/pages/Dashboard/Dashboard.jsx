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

  const {close, setClose, deleted, setDeleted} = useContext(ModalContext)
  
  const [loading, setLoading] = useState(false);
  // const [close, setClose] = useState(false);
  // const [deleted, setDeleted] = useState(false);
  const [identificator, setIdentificator] = useState(null);
  const [reverse, setReverse] = useState(null);
  const [profile, setProfile] = useState(null);
  const getToken = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, auth);

  return (
    <DivLoginPrincipal>
      {deleted && (
        <ModalDelete
          setReverse={setReverse}
          reverse={reverse}
          identificator={identificator}
          setIdentificator={setIdentificator}
          setDeleted={setDeleted}
        />
      )}
      {close && <ModalAdd />}
      {loading && (
        <BaseLoading>
          <LoadingRing color="#ff577f" />
        </BaseLoading>
      )}
      <Header setLoading={setLoading} setAuth={setAuth} />
      <SectionDashboard
        setAuth={setAuth}
        profile={profile}
        setProfile={setProfile}
      />
      <SectionPrincipal
        profile={profile}
        setProfile={setProfile}
        setReverse={setReverse}
        reverse={reverse}
        identificator={identificator}
        setIdentificator={setIdentificator}
        deleted={deleted}
        setDeleted={setDeleted}
        close={close}
        setClose={setClose}
      />
    </DivLoginPrincipal>
  );
};

export default Dashboard;
