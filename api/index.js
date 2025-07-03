export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const isBot = /bot|crawl|slurp|spider|facebookexternalhit|WhatsApp|preview/i.test(ua);

  const { wallet } = req.query;

  // Tableau des smartlinks
  const smartlinks = {
    wallet1: 'https://zeydoo.com/?aff_id=123&sub1=wallet1',
    wallet2: 'https://zeydoo.com/?aff_id=123&sub1=wallet2',
    wallet3: 'https://zeydoo.com/?aff_id=123&sub1=wallet3',
    // Ajoute ici autant de wallets que nécessaire
  };

  const smartlink = smartlinks[wallet] || 'https://zeydoo.com/?aff_id=123'; // par défaut

  if (isBot) {
    res.writeHead(302, { Location: 'https://example.com' }); // page neutre pour bots
  } else {
    res.writeHead(302, { Location: smartlink }); // redirection vers ton smartlink réel
  }

  res.end();
}
