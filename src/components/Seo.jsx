import { Helmet } from 'react-helmet-async';
import { business } from '../data/business.js';
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  buildLocalBusinessJsonLd,
  buildWebSiteJsonLd,
  getCanonical
} from '../data/seo.js';

function Seo({
  title,
  description,
  path = '/',
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  jsonLd = [],
  noindex = false
}) {
  const canonical = getCanonical(path);
  const keywordContent = keywords || DEFAULT_KEYWORDS;
  const structuredData = [
    buildLocalBusinessJsonLd(),
    buildWebSiteJsonLd(),
    ...jsonLd
  ];

  return (
    <Helmet>
      <html lang="en-ZW" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="author" content={business.name} />
      <meta
        name="robots"
        content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />
      <link rel="canonical" href={canonical} />

      <meta name="geo.region" content="ZW-MI" />
      <meta name="geo.placename" content="Gweru, Zimbabwe" />
      <meta
        name="geo.position"
        content={`${business.coordinates.lat};${business.coordinates.lng}`}
      />
      <meta
        name="ICBM"
        content={`${business.coordinates.lat}, ${business.coordinates.lng}`}
      />

      <meta property="og:site_name" content={business.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_ZW" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {structuredData.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

export default Seo;
