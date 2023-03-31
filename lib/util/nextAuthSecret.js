export default function getNextAuthSecret() {
  if (process.env.NEXTAUTH_SECRET) {
    return process.env.NEXTAUTH_SECRET
  }

  try {
    const secret = JSON.parse(process.env.AMPLIFY_SECRETS).NEXTAUTH_SECRET;
    console.log("Parsed secret from Amplify secrets: " + secret.substring(0, 5));
    return secret;
  } catch (error) {
    console.error("Error parsing Amplify secret: " + error.message);
    throw new Error('An error occurred on the server.');
  }
} 
