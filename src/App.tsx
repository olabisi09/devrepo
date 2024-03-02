import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/register";
import Dashboard from "./screens/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
