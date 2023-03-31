import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';

export default function useRedirect(authRequired = true) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const isLoggedIn = status === 'authenticated';

  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (authRequired && !isLoggedIn) {
      signIn();
      return;
    }

    if (isLoggedIn) {
      let nextPath = '';
      if (!session.user) {
        nextPath = '/support';
        router.push(nextPath);
      } else {
        console.log("got user: " + JSON.stringify(session.user));
      }
    }
  }, [isLoggedIn, router, status]);

  return null;
}
