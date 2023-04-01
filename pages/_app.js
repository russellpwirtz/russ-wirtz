import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import React from 'react';
import { SessionProvider } from 'next-auth/react';

function App({ Component, pageProps }) {
  const { session, ...restPageProps } = pageProps;

  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}

export default App;