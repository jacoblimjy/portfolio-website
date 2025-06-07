import projects from "@/data/projects.json";

export type ProjectJson = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  gitHubUrl?: string;
  otherUrl?: string;
};

export const projectsData = projects.map((p: ProjectJson) => ({
  title: p.title,
  description: p.description,
  tags: p.tags,
  imageUrl: `/${p.image}`,
  gitHubUrl: p.gitHubUrl,
  otherUrl: p.otherUrl,
})) as Array<{
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  gitHubUrl?: string;
  otherUrl?: string;
}>;

