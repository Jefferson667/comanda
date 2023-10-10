
import Image from "next/image"
export default function Cards() {
    return (
        <>
            <main className="flex space-x-1">

                <Image
                    className="space-x-2 mt-1 hover:scale-[1.1] transition"
                    width={200}
                    height={50}
                    src={"/cunha.jpeg"}
                    alt="prato1"
                />
                <Image
                    className="space-x-2 mt-1 hover:scale-[1.1] transition"
                    width={200}
                    height={200}
                    src={"/paulo.jpeg"}
                    alt="prato2"
                />


                <Image
                    className="space-x-2 mt-1 hover:scale-[1.1] transition"
                    width={200}
                    height={200}
                    src={"/pratocunha.jpeg"}
                    alt="prato3"
                />


            </main>




        </>
    )
}