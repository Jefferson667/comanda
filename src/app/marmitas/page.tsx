import Image from "next/image"

export default function Marmitas11() {
    return (
        <>
            <h1>
                <Image
                    className="space-x-2 mt-1 hover:scale-[1.1] transition"
                    width={200}
                    height={50}
                    src={"/cunha.jpeg"}
                    alt="prato1"
                />
            </h1>

        </>
    )
}