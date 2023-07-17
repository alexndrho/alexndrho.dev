import styles from '@styles/modules/Home.module.css';
import me from '@assets/me.webp';
import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '@assets/icons/linkedin.svg';

const Home = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container container--section ${styles['hero__container']} `}>
        <div className={styles.hero__info}>
          <h1 className={styles.hero__title}>
            <span className={`${styles.hero__span} ${styles['hero__span--title']}`}>
              Hi, my name is
            </span>
            Alexander Ho.
          </h1>

          <p className={styles.hero__description}>
            I&apos;m a{' '}
            <span className={`${styles.hero__span} ${styles['hero__span--highlight']}`}>
              Full Stack Web Developer
            </span>{' '}
            based in Manila, Philippines. 📍
          </p>

          <div className={styles.hero__links}>
            <a
              href="https://github.com/alexndrho"
              aria-label="Github"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon className="link--icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/alexander-gabriel-ho/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon className="link--icon" />
            </a>
          </div>
        </div>

        <div>
          <img
            src={me}
            alt="Alexander Ho"
            draggable={false}
            className={styles['hero__profile-pic']}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
