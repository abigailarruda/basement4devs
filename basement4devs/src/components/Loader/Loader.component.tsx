import { HashLoader} from 'react-spinners';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.container}>
      <HashLoader size={32} color="#00cc85" />
    </div>
  );
};

export default Loader;
