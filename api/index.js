export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const wallet = req.query.wallet || '';

  const isBot = /bot|crawl|slurp|spider|facebookexternalhit|WhatsApp|preview/i.test(ua);

  // ✅ Ajoute tes smartlinks ici
  const smartlinks = {
    test1: 'https://google.com',
    // test2: 'https://autre-lien.com',
    // test3: 'https://encore-un-lien.com',
  };

  const smartlink = smartlinks[wallet];

  if (isBot) {
    res.writeHead(302, { Location: 'https://example.com' }); // redirection neutre
  } else if (smartlink) {
    res.writeHead(302, { Location: smartlink }); // redirection réelle
  } else {
    res.writeHead(302, { Location: 'https://google.com' }); // fallback
  }

  res.end();
}
