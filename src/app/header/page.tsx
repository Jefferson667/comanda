import Image from "next/image"

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

                    <nav className="flex items-center  font-bold">
                        <p>
                            marmitas
                        </p>


                    </nav>

                </header>


            </main>




        </>
    )
}