/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { parseCookies, setCookie } from 'nookies';
import type { AppProps } from 'next/app';

const cookies = parseCookies();
if (!cookies.simpleSystem) setCookie(undefined, 'simpleSystem', 'Bearer empty');

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
