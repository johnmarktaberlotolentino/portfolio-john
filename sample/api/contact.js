export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'Please complete all fields.' });
  }

  console.log('Vercel contact submission:', { name, email, subject, message });
  return res.status(200).json({ message: 'Message received successfully.' });
}
