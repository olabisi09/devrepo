interface Project {
  id: number;
  createdAt: string;
  projectName: string;
  description: string;
  links: Link[];
}

interface Link {
  id: number;
  createdAt: string;
  linkTo: string;
  linkDescription: string;
}