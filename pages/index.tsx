import { Layout } from '@/components'

export default function Home() {
  return <main>hello world</main>
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
