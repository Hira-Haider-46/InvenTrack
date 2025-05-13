import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import InStock from "./pages/InStock";
import CreateStock from "./pages/CreateStock";
import EditStock from "./pages/EditStock";
import Layout from "./layout/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";
import PublicRoute from "./routes/PublicRoute";

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Layout />}>
          <Route index element={<InStock />} />
          <Route path="create" element={<CreateStock />} />
          <Route path="edit" element={<EditStock />} />
        </Route>
      </Route>

      <Route path="*" element={<h1 className="text-xl md:text-3xl text-center text-gray-600 mt-60">404 - Page Not Found</h1>}/>
    </Routes>
  );
}

export default App;