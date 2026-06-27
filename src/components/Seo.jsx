import { Helmet } from 'react-helmet-async';

function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="event equipment hire Gweru, chair hire Zimbabwe, tent hire Midlands, PA system hire Bulawayo, wedding equipment rental Zimbabwe"
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default Seo;
