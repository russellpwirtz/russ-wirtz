export default function getGoogleCredentials() {
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    return { clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }
  }

  try {
    const clientId = JSON.parse(process.env.AMPLIFY_SECRETS).GOOGLE_CLIENT_ID;
    const clientSecret = JSON.parse(process.env.AMPLIFY_SECRETS).GOOGLE_CLIENT_SECRET;

    console.log("Parsed GoogCreds from Amplify secrets: " + clientId.substring(0, 5) + ", " + clientSecret.substring(0, 2));
    return { clientId, clientSecret }
  } catch (error) {
    console.error("Error parsing Amplify api key: " + error.message);
    throw new Error('An error occurred on the server.');
  }
}
