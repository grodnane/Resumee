import { groq } from "next-sanity";
import { Project } from "../typings";
import { sanityClient } from "../sanity";

const query = groq`
*[_type == "projects"] {...,tech [] ->}
`;

export const fetchProjects = async () => {
  const projects: Project[] = await sanityClient.fetch(query);

  return projects;
};
