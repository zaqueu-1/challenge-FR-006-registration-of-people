import Head from 'next/head'
import Form from './components/Form'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moviester</title>
        <meta name="description" content="Compartilhe seus gostos!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image  src='/../public/images/logo.png' width='200' height='200' className='logo' />
        <Form />
      </main>

      <div className='footer'>
        <p>Feito por Eduardo Zaqueu como parte do <a href='https://github.com/JCDMeira/challenge-roadmap-index' target='_blank'>desafio React</a> de Jean Meira</p>
      </div>
    </div>
  )
}
