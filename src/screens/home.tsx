import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center">
      <h1>DevRepo - The ultimate Dev Store</h1>
      <p>
        Got a lot of ideas and links to help with that project? Put them here!
      </p>
      <br />
      <button onClick={() => navigate("/sign-in")}>Get Started</button>
    </div>
  );
}
