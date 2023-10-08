import Image from 'next/image'
import Comanda from './components/comanda'
import Pagina1 from './paginapricipal/page'
import Header from './header/page'
import Footer from './footer/page'
import Cards from './card/page'

export default function Home() {
  return (
    <>
      <title>Don ana</title>
      <Header />
      <Pagina1 />
      <Cards />
      <Footer />


    </>
  )
}
