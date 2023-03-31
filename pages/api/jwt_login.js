import { getToken } from "next-auth/jwt"
// import { getServerSession } from "next-auth"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let token = await getToken({ req });
    res.status(200).json({ messageContent: token.substring(0, 3) });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
