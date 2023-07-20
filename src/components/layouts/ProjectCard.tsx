import styles from '@styles/modules/layouts/ProjectCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

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
              <span className={styles.card__link__icon}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
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
              <span className={styles.card__link__icon}>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
