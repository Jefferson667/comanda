import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <>
            <main>
                <header className="flex justify-between bg-gray-100">

                    <Image
                        width={100}
                        height={100}
                        src="/don.jpg"
                        alt="error"
                    />

                    <nav className="flex items-center mr-2  font-bold">
                        <p>
                           <Link href="marmitas">mm</Link> 
                        </p>


                    </nav>

                </header>


            </main>




        </>
    )
}