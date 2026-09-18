import { AuthProvider } from "./context/AuthContext";
import PageRouter from "./router/PageRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <PageRouter />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
