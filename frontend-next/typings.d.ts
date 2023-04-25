interface sanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updateAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Skill extends sanityBody {
  _type: "skill";
  title: string;
  image: Image;
}

export interface PageInfo extends sanityBody {
  _type: "pageInfo";
  name: string;
  aobutInfo: string;
  role: string;
  aboutPic: Image;
  text: string;
  heroImage: Image;
  toTopImg: Image;
}

export interface Social extends sanityBody {
  _type: "social";
  title: string;
  url: string;
}
export interface Technology extends sanityBody {
  _type: "skill";
  image: Image;
  title: string;
}
export interface Experiences extends sanityBody {
  name: string;
  role: string;
  companyPic: Image;
  dateStart: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  technology: Technology[];
  summary: string[];
}
export interface Project extends sanityBody {
  title: string;
  image: Image;
  summary: string;
  tech: Skills[];
  link: string;
}
