import { useState } from 'react';
import styles from '@styles/modules/Nav.module.css';
import { ReactComponent as BarsIcon } from '@assets/icons/bars.svg';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    const mobileQuery = window.matchMedia('(max-width: 799px)');
    if (!mobileQuery.matches) return;

    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    setIsMenuOpen(true);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="#home" className={`${styles.logo} ${styles.link} link`}>
          alexndrho
        </a>

        <div className={styles['main-menu'] + ' ' + (isMenuOpen ? styles['show-main-menu'] : '')}>
          <a href="#about" className={styles.link + ' link'} onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" className={styles.link + ' link'} onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className={styles.link + ' link'} onClick={toggleMenu}>
            Contact
          </a>
        </div>

        <BarsIcon className={styles['ham-menu']} onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Nav;
