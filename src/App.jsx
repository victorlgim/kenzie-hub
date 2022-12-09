import { TechProvider } from "./contexts/TechContext";
import { GlobalProvider } from "./contexts/GlobalContext";
import { UserProvider } from "./contexts/UserContext";
import RoutesMain from "./routes/routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <GlobalProvider>
      <UserProvider>
        <TechProvider>    
            <GlobalStyle />
            <RoutesMain />
            <ToastContainer position="top-right" autoClose={1000}hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </TechProvider>
      </UserProvider>
    </GlobalProvider>
  );
}

export default App;
