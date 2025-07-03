export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';

  // Bots/Trackers détectés (à adapter selon ton besoin)
  const isBot = /bot|crawl|slurp|spider|facebookexternalhit|WhatsApp|preview/i.test(ua);

  if (isBot) {
    // Redirection vers une page neutre
    res.writeHead(302, { Location: 'https://example.com' });
  } else {
    // Redirection vers ton smartlink réel
    res.writeHead(302, { Location: 'https://ton-smartlink.com' });
  }

  res.end();
}
