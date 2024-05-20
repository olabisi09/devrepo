import { supabase } from "./supabase-client";

const user = supabase.auth.getUser();

export const getProjects = async () => {
  return (
    await supabase
      .from("projects")
      .select("*")
      .eq("userid", (await user).data.user?.id)
  )?.data as Project[];
};

export const addProject = async (payload?: Link, projectId?: number) => {
  //const {error} = await supabase.from("links").insert({...payload, projectId: projectId});
  const {error, data} = await supabase.from("links").insert({linkTo: "https://www.google.com", linkDescription: "Some link", id: 1});
  return "done";
}