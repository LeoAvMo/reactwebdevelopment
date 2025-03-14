import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedPage from "./pages/ProtectedPage";
import PrivateRoute from "./components/PrivateRoute";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen"; // Nueva pantalla de registro
import ForgotPasswordScreen from "./ForgotPassword"; // Nueva pantalla de recuperación de contraseña
import Header from "./components/Header";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
          <Route
            path="/protected"
            element={
              <PrivateRoute>
                <ProtectedPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;