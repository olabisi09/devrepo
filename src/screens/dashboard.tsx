import { useQuery } from "@tanstack/react-query";
import { addProject, getProjects } from "../requests";
import Card from "../components/card";
import { max } from "date-fns";
import { GridViewIcon, ListViewIcon, PlusIcon } from "../utils/icons";
import Button from "../components/button";

export default function Dashboard() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get-projects"],
    queryFn: getProjects,
  });

  const projects = data as Project[];
  const noOfProjects = projects?.length || 0;
  const mostRecentProject = projects?.reduce((prev, project) => {
    const maxDate = max([
      new Date(prev.createdAt),
      new Date(project.createdAt),
    ]);
    return maxDate === new Date(project.createdAt) ? project : prev;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <>
      <section className="flex flex-col lg:flex-row *:flex-1 *:grow items-center gap-4">
        <Card>
          <label>Number of projects</label>
          <h3>{noOfProjects}</h3>
        </Card>
        <Card>
          <label>Most recent</label>
          <h3>{mostRecentProject?.projectName}</h3>
        </Card>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center">
          <h4>Recent projects</h4>
          <div className="flex items-center gap-4">
            <Button
              icon={<PlusIcon />}
              text="Add new project"
              className="flex items-center gap-1"
              onClick={() => addProject()}
            />
            <button>
              <GridViewIcon width={20} height={20} />
            </button>
            <button>
              <ListViewIcon width={20} height={20} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
