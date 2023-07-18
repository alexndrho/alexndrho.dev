import styles from '@styles/modules/Projects.module.css';
import blogPostPreview from '@assets/previews/blog-post.png';
import stickyThoughtsPreview from '@assets/previews/sticky-thoughts.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <section id="projects">
      <div className={`${styles.projects__container} container container--section`}>
        <h2>Projects</h2>

        <article className={styles.card}>
          <img
            src={stickyThoughtsPreview}
            alt="sticky-thoughts-preview"
            className={styles.card__img}
          />

          <div className={styles.card__info}>
            <h3 className={styles.card__title}>Sticky Thoughts</h3>
            <p className={styles.card__desc}>
              Post your thoughts, opinions, and experiences anonymously. Whether you&apos;re looking
              to vent about your day, share your political views, or connect with other people.
            </p>

            <div className={styles['card__tech-stacks']}>
              <span className={styles['card__tech-stack']}>React</span>
              <span className={styles['card__tech-stack']}>Firebase</span>
              <span className={styles['card__tech-stack']}>Mantine</span>
            </div>

            <div className={styles.card__links}>
              <a
                href="https://sticky-thoughts.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.card__link}
              >
                Live
                <span className={styles.card__link__icon}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </span>
              </a>

              <a
                href="https://github.com/alexndrho/sticky-thoughts"
                target="_blank"
                rel="noreferrer"
                className={`${styles.card__link}`}
              >
                Source
                <span className={styles.card__link__icon}>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
            </div>
          </div>
        </article>

        <article className={styles.card}>
          <img src={blogPostPreview} alt="blog-post-preview" className={styles.card__img} />

          <div className={styles.card__info}>
            <h3 className={styles.card__title}>Blog</h3>
            <p className={styles.card__desc}>
              A blog posting website allows users to create an account, write blogs in Markdown
              format, and add photos, videos, and other media. Users can also update their personal
              information and upload a profile picture.
            </p>

            <div className={styles['card__tech-stacks']}>
              <span className={styles['card__tech-stack']}>MongoDB</span>
              <span className={styles['card__tech-stack']}>Express</span>
              <span className={styles['card__tech-stack']}>React</span>
              <span className={styles['card__tech-stack']}>Node</span>
              <span className={styles['card__tech-stack']}>Stitches</span>
            </div>

            <div className={styles.card__links}>
              <a
                href="https://blog-post-k6bm.onrender.com/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.card__link}`}
              >
                Live
                <span className={styles.card__link__icon}>
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </span>
              </a>

              <a
                href="https://github.com/alexndrho/blog-post"
                target="_blank"
                rel="noreferrer"
                className={`${styles.card__link}`}
              >
                Source
                <span className={styles.card__link__icon}>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
