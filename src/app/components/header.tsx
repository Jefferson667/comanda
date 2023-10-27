import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <main>
                <header className="flex justify-center bg-gray-100">

                    <Image
                        width={150}
                        height={150}
                        src="/don.jpg"
                        alt="error"
                    />


                    <button className="flex items-center ml-2">
                        <Link href={'marmitas'}>faca seu pedido aki</Link>
                    </button>

                </header>

            </main>




        </>
    )
}