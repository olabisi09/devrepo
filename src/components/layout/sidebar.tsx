import { useNavigate } from "react-router-dom";
import { supabase } from "../../requests/supabase-client";
import { routes } from "./routes";

const Sidebar = () => {
  const navigate = useNavigate();

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.log(error.message);
    else navigate("/");
  };

  const links = [
    {
      link: routes.home,
      label: "Home",
    },
    {
      link: routes.projects,
      label: "Projects",
    },
  ];

  return (
    <aside className="flex flex-col justify-between h-full">
      <h4>
        <a href="/">DevRepo</a>
        <ul className="list-none flex flex-col gap-1 mt-8">
          {links.map((link) => (
            <a
              key={link.link}
              href={link.link}
              className="text-base hover:bg-[#F3F3F3] rounded-tr-lg rounded-br-lg py-1 pl-3 hover:border-l border-primary"
            >
              {link.label}
            </a>
          ))}
        </ul>
      </h4>
      <button onClick={signOut}>Logout</button>
    </aside>
  );
};

export default Sidebar;
