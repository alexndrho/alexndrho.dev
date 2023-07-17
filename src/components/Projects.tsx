import styles from '@styles/modules/Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container container--section">
        <h2 className={styles.projects__title}>
          Projects <span className={styles.projects__title__span}>are coming soon 🤠</span>
        </h2>
      </div>
    </section>
  );
};

export default Projects;
