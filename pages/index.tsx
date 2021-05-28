import Head from 'next/head'
import { Button, TextInput, Header, Main, Footer } from 'components'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-full">
      <Head>
        <title>Be There Or Be Square</title>
        <meta name="description" content="BOTBS - The effortless event scheduler" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>Be There Or Be Square</Header>

      <Main>
        <TextInput placeholder="Placeholder" className="mr-2" />
        <Button>Test</Button>
      </Main>

      <Footer />
    </div>
  )
}
