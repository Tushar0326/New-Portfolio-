import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({
  title = 'Tushar Raj Choudhary - Portfolio',
  description = 'Mechanical Engineering Student | AI & Python Enthusiast | Tech Innovator. Explore my projects, experience, and skills.',
  image = '/og-image.jpg',
  url = 'https://tusharraj.dev',
  type = 'website',
}: SEOProps) => {
  const siteTitle = title === 'Tushar Raj Choudhary - Portfolio' 
    ? title 
    : `${title} | Tushar Raj Choudhary`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional meta tags */}
      <meta name="theme-color" content="#0f172a" />
      <meta name="author" content="Tushar Raj Choudhary" />
      <meta name="keywords" content="portfolio, web development, AI, Python, React, TypeScript" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 