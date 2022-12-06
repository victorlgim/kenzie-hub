import { ModalProvider } from "./contexts/ModalContext";
import { ApiProvider } from "./contexts/ApiContext";
import { GlobalProvider } from "./contexts/GlobalContext";
import { AuthProvider } from "./contexts/AuthContext";
import RoutesMain from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
        <ModalProvider>
          <ApiProvider>
            <GlobalStyle />
            <RoutesMain />
          </ApiProvider>
        </ModalProvider>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
