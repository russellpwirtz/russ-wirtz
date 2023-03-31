import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import getNextAuthSecret from '../../../lib/util/nextAuthSecret';
import getGoogleCredentials from '../../../lib/util/googleProviderCredentials';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
      // redirectUri: '/api/auth/callback/google',
    })
  ],
  secret: getNextAuthSecret(),
  callbacks: {
    async jwt({ token }) {
      console.log("jwt callback! " + token)
      token.userRole = "admin"
      return token
    },
  },
})


