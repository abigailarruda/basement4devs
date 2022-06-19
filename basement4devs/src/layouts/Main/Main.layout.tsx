import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

import styles from './Main.module.scss';

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <>
      <Navbar />

      <main className={styles.container}>
        {children}
      </main>

      <Footer />
    </>
  );
};

export default Main;
