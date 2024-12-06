import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProfilePage from "./components/ProfilePage";
import DashboardPage from "./components/DashboardPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

