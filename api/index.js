export default function handler(req, res) {
  const ua = req.headers['user-agent'] || '';
  const wallet = req.query.wallet || '';

  const isBot = /bot|crawl|slurp|spider|facebookexternalhit|WhatsApp|preview/i.test(ua);

  const smartlinks = {
    test1: 'https://lfjcx.com/link?z=9521579&var={SOURCE_ID}&ymid={CLICK_ID}'
  };

  if (isBot) {
    res.writeHead(302, { Location: 'https://example.com' }); // Page neutre pour bots
  } else if (wallet in smartlinks) {
    res.writeHead(302, { Location: smartlinks[wallet] }); // Redirection réelle
  } else {
    res.writeHead(302, { Location: 'https://google.com' }); // Fallback si mauvais paramètre
  }

  res.end();
}
