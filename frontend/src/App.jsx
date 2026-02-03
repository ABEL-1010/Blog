import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PublicLayout from "./layouts/PublicLayout.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
import PublicLandingPage from "./pages/public/PublicLandingPage";
import UserLandingPage from "./pages/user/UserLandingPage";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import BlogWritingPage from "./pages/user/BlogWriting.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Public Layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<PublicLandingPage />} />
          </Route>

          {/* Protected User Routes */}
          <Route
            path="/user"
            element={
              <ProtectedRoute>
                <UserLayout />
              </ProtectedRoute>
            }
          >
            {/* /user */}
            <Route index element={<UserLandingPage />} />

            {/* /user/write ✅ */}
            <Route path="write" element={<BlogWritingPage />} />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
