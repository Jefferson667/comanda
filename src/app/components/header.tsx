import Link from "next/link"

import Image from "next/image"



export default function Header() {
    return (
        <>
            <section className="flex justify-center">
                <Image
                    className=" mt-3 space-x-2 hover:scale-[1.1] transition"
                    width={150}
                    height={500}
                    src={"/don.jpg"}
                    alt="error"
                />
                <nav className="flex items-center ml-[100px]">
                    <Link href='/marmitas'>
                        peça sua marmita
                    </Link>
                </nav>

            </section>
            <h1>
                SISTEMA BUFFET LIVRE NO ALMOÇO com carnes na brasa servidas na hora 🔥 Foundue na sobremesa 🤤 atendimento DOMINGO à SEXTA-FEIRA. Aos sábados FECHADO.
            </h1>

        </>
    )
}