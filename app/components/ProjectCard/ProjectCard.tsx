import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Button from "../Button/Button";
import { Github, WebIcon } from "../Icons/IconComponents/Icons";
import chair from "../../../public/Icons/table.jpeg";

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <li>
      <Image src={chair} alt="pr" width={350} height={450} />
      <p>project title</p>
      <p>project description</p>
      <span> tech stack icons</span>
      <div>
        <div>
          sp
          <Button
            type="link"
            variant="secondary"
            to="#"
            icon={<WebIcon />}
            label="Website"
          />
        </div>
        <div>
          <Button
            type="link"
            variant="secondary"
            to="#"
            icon={<Github />}
            label="Github"
          />
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
