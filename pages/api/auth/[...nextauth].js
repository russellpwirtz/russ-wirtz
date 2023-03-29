import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.secrets.GOOGLE_CLIENT_ID,
      clientSecret: process.env.secrets.GOOGLE_CLIENT_SECRET,
    })
  ]
})