import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;