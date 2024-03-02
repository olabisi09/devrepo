import { useNavigate } from "react-router-dom";
import { supabase } from "../requests/supabase-client";

export default function Dashboard() {
  const navigate = useNavigate();
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error.message);
    else navigate("/");
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center">
      <h1>DevRepo - The ultimate Dev Store</h1>
      <p>
        Here's your dashboard. You can add, edit, and delete your links here.
      </p>
      <br />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}
