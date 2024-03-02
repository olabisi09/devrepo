import { useState } from "react";
import { supabase } from "../requests/supabase-client";

export default function Register() {
  const [user, setUser] = useState({ email: "", password: "" });
  const signUp = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    console.log(data, error);
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h2>Sign up for an account</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp();
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
          Sign up
        </button>
      </form>
    </div>
  );
}
