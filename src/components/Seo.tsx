import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string; // e.g. "/baglamukhi-havan"
  keywords?: string;
  type?: "website" | "article";
  image?: string;
}

const SITE = "https://www.baglamukhihavananushthan.com";

const Seo = ({ title, description, path, keywords, type = "website", image }: SeoProps) => {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
