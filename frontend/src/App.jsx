import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout.jsx";
import PublicLandingPage from "./pages/public/PublicLandingPage";
import Register from "./pages/auth/Register";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<PublicLandingPage />} />
      </Route>
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}



