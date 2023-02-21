
import './App.css';
import LoginPage from './Components/LoginPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from './Components/UserPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<LoginPage />} path="/admin"></Route>
          <Route element={<UserPage />} path="/admin/users"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
