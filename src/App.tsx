import { Route, Routes } from "react-router-dom";
import Home from "./screens/home";
import Login from "./screens/login";
import Register from "./screens/register";
import Dashboard from "./screens/dashboard";
import Layout from "./components/layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
