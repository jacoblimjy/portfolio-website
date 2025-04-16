import { links } from "./data";

// export type SectionName = (typeof links)[number]["name"];

// export type SectionLink = (typeof links)[number];
export type SectionLink = (typeof links)[number];

// *new* — union of all the link.name strings
export type SectionName = SectionLink["name"];