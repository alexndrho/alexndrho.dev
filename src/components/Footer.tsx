import styles from '@styles/modules/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container container--footer ${styles['footer__container']}`}>
        <div className={styles.footer__section}>
          <h2 className={styles.footer__title}>Connect</h2>

          <a
            href="https://github.com/alexndrho"
            aria-label="Github"
            className={`link ${styles.footer__link}`}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-gabriel-ho/"
            aria-label="LinkedIn"
            className={`link ${styles.footer__link}`}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.footer__section}>
          <h2 className={styles.footer__title}>Get in Touch</h2>
          <a href="mailto: ho.alexander.g@gmail.com" className={`link ${styles.footer__link}`}>
            ho.alexander.g@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
