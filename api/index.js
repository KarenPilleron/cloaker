export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const wallet = req.query.wallet || '';

  const isBot = /bot|crawl|slurp|spider|facebookexternalhit|WhatsApp|preview/i.test(ua);

const smartlink = smartlinks[wallet];

if (isBot) {
  res.writeHead(302, { Location: 'https://example.com' }); // redirection neutre
} else if (smartlink) {
  res.writeHead(302, { Location: smartlink }); // redirection réelle
} else {
  res.writeHead(302, { Location: 'https://google.com' }); // fallback
}
res.end();
