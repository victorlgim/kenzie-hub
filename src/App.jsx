// import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import GlobalStyle from "./styles/global";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login setAuth={setAuth} />} />

        <Route path="/cadastro" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard auth={auth} setAuth={setAuth} />}
        />

        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
