import Link from 'next/link';
import { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { useTerms } from '@/contexts/terms';

import styles from './Navbar.module.scss';

const Navbar = () => {
  const { getTerms } = useTerms();

  const [search, setSearch] = useState('');

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.container}>
        <Link href="/">
          <a>
            <h5>basement4devs</h5>
          </a>
        </Link>

        <div className={styles.search}>
          <input type="text" placeholder="Buscar..." value={search} onChange={handleSearchChange} />

          <button onClick={() => getTerms(search)}>
            <FiSearch size="1rem" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
