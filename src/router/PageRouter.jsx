import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Chat from "../Pages/Chat";
import ProtectedRoutes from "../components/ProtectedRoutes";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PageRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    async function checkTokens() {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/refreshtokens/generate",
          {},
          { withCredentials: true },
        );
        if (!res) console.log("no tokens");

        console.log(res);
        console.log(res.data.tokens);
      } catch (error) {
        setTimeout(() => {
          navigate("/login");
        }, 3000);
        console.log("login again to get tokens", error);
      }
    }
    checkTokens();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PageRouter;
