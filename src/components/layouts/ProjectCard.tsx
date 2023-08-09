import styles from '@styles/modules/layouts/ProjectCard.module.css';
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb';

interface ProjectCardProps {
  title: React.ReactNode;
  description: React.ReactNode;
  image: string;
  techStack: string[];
  liveLink?: string;
  sourceLink?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  techStack,
  liveLink,
  sourceLink,
}: ProjectCardProps) => {
  return (
    <article className={styles.card}>
      <img src={image} alt="project-preview" className={styles.card__img} />

      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{title}</h3>
        <p className={styles.card__desc}>{description}</p>

        <div className={styles['card__tech-stacks']}>
          {techStack.map((tech) => (
            <span key={tech} className={styles['card__tech-stack']}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.card__links}>
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--dashed-effect"
            >
              Live
              <TbExternalLink className={styles.card__link__icon} />
            </a>
          )}

          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary btn--dashed-effect"
            >
              Source
              <TbBrandGithub className={styles.card__link__icon} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
