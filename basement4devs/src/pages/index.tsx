import type { NextPage } from 'next';
import Head from 'next/head';

import { Term as Card } from '@/components/Term';
import { Loader } from '@/components/Loader';

import { useTerms } from '@/contexts/terms';

import { Main } from '@/layouts/Main';

const Home: NextPage = () => {
  const { terms, loading } = useTerms();

  return (
    <>
      <Head>
        <title>basement4devs</title>
      </Head>

      <Main>
        {loading
          ? <Loader />
          : terms?.map((term) => {
            return (
              <Card key={term.id} term={term.term} descriptions={term.descriptions} tag={term.tag} />
            );
          })
        }
      </Main>
    </>
  );
};

export default Home;
