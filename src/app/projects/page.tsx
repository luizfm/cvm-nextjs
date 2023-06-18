import Image from "next/image";
import styles from "./styles.module.scss";
import { PHOTO_LIST } from "@/mocks";
import { PROJECT_OPTIONS } from "@/constants";
import ProjectCard, {
  ProjectCardVariant,
} from "@/components/projects/project-card";

export const metadata = {
  title: "Projetos | CVM",
};

export default function Projects() {
  return (
    <div className={styles["projects-container"]}>
      <h1 className={styles["page-title"]}>Projetos</h1>
      {PROJECT_OPTIONS.map((option, index) => (
        <ProjectCard
          key={option.id}
          description={option.description}
          title={option.title}
          imageUrl={option.imageUrl}
          variant={
            index % 2 === 0 ? ProjectCardVariant.LEFT : ProjectCardVariant.RIGHT
          }
        />
      ))}
    </div>
  );
}
