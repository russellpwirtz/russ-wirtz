import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: JSON.parse(process.env.secrets).GOOGLE_CLIENT_ID,
      clientSecret: JSON.parse(process.env.secrets).GOOGLE_CLIENT_SECRET,
    })
  ]
})