export default function getApiKey() {
  if (process.env.OPENAI_API_KEY) {
    return process.env.OPENAI_API_KEY
  }

  try {
    const apiKey = JSON.parse(process.env.AMPLIFY_SECRETS).OPENAI_API_KEY;
    console.log("Parsed API key from Amplify secrets: " + apiKey.substring(0, 5));
    return apiKey;
  } catch (error) {
    console.error("Error parsing Amplify api key: " + error.message);
    throw new Error('An error occurred on the server.');
  }
} 
