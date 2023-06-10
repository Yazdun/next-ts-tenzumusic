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
      <meta property="og:image" content="/og.jpg" />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}
