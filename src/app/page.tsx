import Image from 'next/image'
import Comanda from './components/comanda'
import Pagina1 from './paginapricipal/page'
import Header from './header/page'
import Footer from './footer/page'

export default function Home() {
  return (
    <>
    <title>Don ana</title>
      <Header />
      <Pagina1 />
      <Footer />

    </>
  )
}
