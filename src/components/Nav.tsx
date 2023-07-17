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
      <div className={`${styles.nav__container} container container--nav`}>
        <a href="#home" className={`${styles.nav__logo} ${styles.nav__link} link--dark`}>
          alexndrho
        </a>

        <div
          className={
            styles['nav__main-menu'] + ' ' + (isMenuOpen ? styles['nav__main-menu--show'] : '')
          }
        >
          <a href="#about" className={styles.nav__link + ' link--dark'} onClick={toggleMenu}>
            About
          </a>
          <a href="#projects" className={styles.nav__link + ' link--dark'} onClick={toggleMenu}>
            Projects
          </a>
          <a href="#contact" className={styles.nav__link + ' link--dark'} onClick={toggleMenu}>
            Contact
          </a>
        </div>

        <BarsIcon className={styles['nav__ham-menu']} onClick={toggleMenu} />
      </div>
    </nav>
  );
};

export default Nav;
