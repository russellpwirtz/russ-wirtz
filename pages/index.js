import { redirect } from 'next/dist/shared/lib/router/router';

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/welcome',
      permanent: false,
    },
  };
}

export default function Index() {
  return null;
}
