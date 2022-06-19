import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { TermsProvider } from '@/contexts/terms';

import client from '@/services';

import '@/styles/global.scss';

function BasementForDevsApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <TermsProvider>
        <Component {...pageProps} />
      </TermsProvider>
    </ApolloProvider>
  );
}

export default BasementForDevsApp;
