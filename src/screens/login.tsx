import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../requests/supabase-client";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    if (error) {
      console.error(error.message);
      return;
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h2>Sign into your account</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn();
        }}
        className="w-96 flex flex-col items-center"
      >
        <div className="w-full">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            className="w-full p-4 border-2 border-gray-300 bg-white rounded-md"
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <br />
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="w-full p-4 border-2 border-gray-300 bg-white rounded-md"
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <br />
        <button type="submit" className="w-full">
          Sign in
        </button>
        <Link className="ml-auto" to="/sign-up">
          Don't have an account? Sign up here
        </Link>
      </form>
    </div>
  );
}
