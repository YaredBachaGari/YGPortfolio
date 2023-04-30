type navbar = { id: number; text: string }[];
type fromdata = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string | number;
  message: string;
};
type iconName =
  | "nextjs"
  | "typscript"
  | "react"
  | "redux"
  | "tailwind"
  | "jest"
  | "javascript"
  | "sequelize"
  | "mysql"
  | "nodejs"
  | "expressjs"
  | "css"
  | "sqlite"
  | "postgres"
  | "aws"
  | "html"
  | "docker"
  | "azure"
  | "csharp"
  | "java"
  | "python"
  | "comm"
  | "team"
  | "prob"
  | "grow"
  | "rese"
  | "teac"
  | "sql"
  | "mongodb"
  | "prisma"
  | "figma"
  | "chartjs";

type techname = {
  id: number;
  techname: iconName;
}[];

type myskills = {
  id: number;
  type: string;
  icon: iconName;
  skillname: string;
  proficiencyPerc: string;
}[];

type webproject = {
  id: number;
  cardImg: string;
  projectTitle: string;
  projectdesc: string;
  techstack: {
    id: number;
    techname: iconName;
  }[];
  weblink: string;
  githublink: string;
}[];
