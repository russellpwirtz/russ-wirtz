import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AboutComponent.module.css';
import { SessionProvider } from "next-auth/react"
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

function AuthenticatedApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const { data, status } = useSession()

  useEffect(() => {
    function handleChange() {
      setIsLoggedIn(status === 'authenticated');
      if (data && data.user) {
        setUser(data.user);
      }
    };

    handleChange();
  }, [status]);

  return <Component {...pageProps} isLoggedIn={isLoggedIn} user={user} />
}

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthenticatedApp Component={Component} pageProps={pageProps} />
    </SessionProvider>
  );
}