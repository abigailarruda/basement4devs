import type { AppProps } from 'next/app';

import '@/styles/global.scss';

function BasementForDevsApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default BasementForDevsApp;
