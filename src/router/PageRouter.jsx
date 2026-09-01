import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Chat from "../Pages/Chat";

function PageRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PageRouter;
