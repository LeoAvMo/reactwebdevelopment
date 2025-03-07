import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedPage from "./pages/ProtectedPage";
import PrivateRoute from "./components/PrivateRoute";
import LoginScreen from "./LoginScreen";
import Header from "./components/Header";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LoginScreen />} />
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