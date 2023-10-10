import Header from "./components/header"
import Pagina1 from "./components/paginaprincipal"
import Cards from "./card/page"
import Footer from "./components/footer"

import Image from "next/image"

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
