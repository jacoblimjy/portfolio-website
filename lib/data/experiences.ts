import React from "react";
import experiences from "@/data/experiences.json";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

const iconMap = {
  CgWorkAlt: React.createElement(CgWorkAlt),
  LuGraduationCap: React.createElement(LuGraduationCap),
} as const;

export type Experience = {
  company: string;
  title: string;
  location: string;
  description: string;
  icon: keyof typeof iconMap;
  date: string;
};

export const experiencesData = experiences.map((exp) => ({
  ...exp,
  icon: iconMap[exp.icon as keyof typeof iconMap],
})) as Array<Omit<Experience, "icon"> & { icon: React.ReactElement }>;

