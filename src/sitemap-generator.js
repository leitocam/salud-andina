const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://ongsaludandina.com' });

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/nosotros', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/contacto', changefreq: 'weekly', priority: 0.8 });
sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap generado exitosamente.');
  })
  .catch((err) => console.error(err));
