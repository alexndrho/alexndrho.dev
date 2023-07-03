import styles from '@styles/modules/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={'section-container ' + styles['container']}>
        <div className={styles.links}>
          <h6>Connect</h6>

          <a
            href="https://github.com/alexndrho"
            aria-label="Github"
            className={styles.link + ' link'}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>

          <a
            href="https://www.linkedin.com/in/alexander-gabriel-ho/"
            aria-label="LinkedIn"
            className={styles.link + ' link'}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className={styles.links}>
          <h6>Get in Touch</h6>
          <a href="mailto: ho.alexander.g@gmail.com" className={styles.link + ' link'}>
            ho.alexander.g@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
