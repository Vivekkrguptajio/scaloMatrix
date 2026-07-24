const https = require('https');
https.get('https://www.schbang.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const match = data.match(/font-family[^;>]+/g);
    console.log("Fonts found:", match ? match.slice(0, 10) : "none");
    const linkMatch = data.match(/<link[^>]*fonts\.googleapis\.com[^>]*>/g);
    console.log("Google Fonts:", linkMatch);
  });
});
