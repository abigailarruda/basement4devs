/* eslint-disable max-len */
import type { NextPage } from 'next';
import Head from 'next/head';

import { Term } from '@/components/Term';

import { Main } from '@/layouts/Main';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>basement4devs</title>
      </Head>

      <Main>
        <Term
          term="Forma Societária"
          descriptions={['A forma societária de uma empresa define o seu tratamento jurídico: quais são suas obrigações, leis aplicáveis ao seu caso, a participação ou não de sócios no negócio e a sua parte no capital social. Existem vários tipos de natureza jurídica para um CNPJ.']}
        />

        <Term
          term="LTDA"
          descriptions={[
            'A sociedade é o tipo de natureza jurídica em que duas ou mais pessoas se juntam para abrir uma empresa, seja dividindo igualmente ou definindo alguém que terá maior controle sobre o negócio.',
            'No caso da Limitada (LTDA), os sócios têm responsabilidade por sua parte na cota, porém todos respondem pela integralização do capital social. É um modelo mais simples e protege o patrimônio individual dos sócios: caso a empresa acabe contraindo dívidas, os bens particulares das pessoas físicas não serão usados para quitar os débitos.',
          ]}
          tag="Forma Societária"
        />
      </Main>
    </>
  );
};

export default Home;
