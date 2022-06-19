import Link from 'next/link';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/">
          <a>basement4devs</a>
        </Link>

        <p>Dicionário de termos jurídicos e financeiros utilizados no Basement.</p>
      </div>
    </footer>
  );
};

export default Footer;
