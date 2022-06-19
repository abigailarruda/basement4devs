import { v4 as uuid } from 'uuid';

import styles from './Term.module.scss';

interface Props {
  term: string;
  descriptions: string[];
  tag?: string;
}

const Term = ({ term, descriptions, tag }: Props) => {
  return (
    <section className={styles.term}>
      <div className={styles.term_container}>
        <h3>{term}</h3>

        {!!tag && <span className={styles.tag}>{tag}</span>}
      </div>

      <hr />

      {descriptions.map((description, ) => {
        return <p key={uuid()}>{description}</p>;
      })}
    </section>
  );
};

export default Term;
