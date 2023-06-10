import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  canonical?: string
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonical }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/og.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}
