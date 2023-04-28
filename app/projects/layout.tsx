import { Montserrat, Architects_Daughter, Poppins } from "next/font/google";
import type { Metadata } from "next";
import TransitionEffect from "../components/TransitionEffect/TransitionEffect";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function ProjectLayout({
  children,
  web,
  research,
}: {
  children: React.ReactNode;
  web: React.ReactNode;
  research: React.ReactNode;
}) {
  return (
    <section className={`${montserrat.className}`}>
      <TransitionEffect/>
      {children}
      <div>{web}</div>
      <div>{research}</div>
    </section>
  );
}