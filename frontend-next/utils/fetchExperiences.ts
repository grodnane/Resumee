import { Experiences } from "../typings";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

const query = groq`
*[_type == "experiences"] {...,technology[]->}
`;

export const fetchExperiences = async () => {
  const experiences: Experiences[] = await sanityClient.fetch(query);

  return experiences;
};
