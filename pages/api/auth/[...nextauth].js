import NextAuth from 'next-auth'
import GoogleProvider from "next-auth/providers/google";

let clientId;
let clientSecret;
if (!process.env.GOOGLE_CLIENT_ID) {
  try {
    clientId = JSON.parse(process.env.AMPLIFY_SECRETS).GOOGLE_CLIENT_ID;
    clientSecret = JSON.parse(process.env.AMPLIFY_SECRETS).GOOGLE_CLIENT_SECRET;
  } catch (error) {
    console.error("Error parsing api key: " + error.message);
    res.status(500).json({ error: 'An error occurred on the server.' });
    return;
  }
} else {
  clientId = process.env.GOOGLE_CLIENT_ID;
  clientSecret = process.env.GOOGLE_CLIENT_SECRET;
}

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: clientId,
      clientSecret: clientSecret,
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
})