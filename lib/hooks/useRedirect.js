import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function useRedirect(props, authRequired = true) {
  const router = useRouter();

  useEffect(() => {
    if (authRequired && !props.isLoggedIn) {
      // router.push('/login');
      signIn()
      return;
    }

    if (props.isLoggedIn) {
      let nextPath = '';
      if (!props.user) {
        nextPath = '/support';
        router.push(nextPath);
      } else {
        console.log("got user: " + JSON.stringify(props.user));
      }
    }
  }, [props.isLoggedIn, router]);

  return null;
}
