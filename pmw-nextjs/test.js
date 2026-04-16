const fs = require('fs'); const html = fs.readFileSync('smartkg.html', 'utf8'); const start = html.indexOf('mystickyelements-contact-form'); console.log(html.substring(start - 500, start + 3000));
