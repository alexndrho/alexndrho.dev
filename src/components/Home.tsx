import Nav from '@components/Nav';
import styles from '@styles/modules/Home.module.css';
import me from '@assets/me.webp';
import { ReactComponent as GithubIcon } from '@assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from '@assets/icons/linkedin.svg';

const Home = () => {
  return (
    <section id="home">
      <Nav />

      <section className={styles.hero}>
        <div className={'section-container ' + styles['section-container']}>
          <div className={styles.info}>
            <h1>
              <span>Hi, my name is</span>
              Alexander Ho.
            </h1>

            <p className={styles.description}>
              I&apos;m a <span>Full Stack Web Developer</span> based in Manila, Philippines. 📍
            </p>

            <div className={styles.links}>
              <a
                href="https://github.com/alexndrho"
                aria-label="Github"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon className="icon-link" />
              </a>

              <a
                href="https://www.linkedin.com/in/alexander-gabriel-ho/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon className="icon-link" />
              </a>
            </div>
          </div>

          <div>
            <img src={me} alt="Alexander Ho" draggable={false} className={styles['hero-img']} />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
