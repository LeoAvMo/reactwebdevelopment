import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";
import Header from "./components/Header";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Protected Pages */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;