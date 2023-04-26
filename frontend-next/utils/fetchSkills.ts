import { groq } from "next-sanity";
import { Skill } from "../typings";
import { sanityClient } from "../sanity";

const query = groq`
*[_type == "skills"]
`;

export const fetchSkills = async () => {
  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
};
