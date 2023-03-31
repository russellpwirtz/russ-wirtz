import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

if (!process.env.GOOGLE_CLIENT_ID) {
  try {
    process.env.GOOGLE_CLIENT_ID = JSON.parse(process.env.AMPLIFY_SECRETS).GOOGLE_CLIENT_ID;
    process.env.GOOGLE_CLIENT_SECRET = JSON.parse(process.env.AMPLIFY_SECRETS).GOOGLE_CLIENT_SECRET;
    process.env.NEXTAUTH_SECRET = JSON.parse(process.env.AMPLIFY_SECRETS).NEXTAUTH_SECRET;
    console.error("Set next auth secret: " + process.env.NEXTAUTH_SECRET);
  } catch (error) {
    console.error("Error parsing api key: " + error.message);
    res.status(500).json({ error: 'An error occurred on the server.' });
    return;
  }
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
})