import Image from "next/image"

export default function Banner() {
    return (
        <>
            <Image className="flex w-full"
                width={1100}
                height={100}
                src={"/card.jpg"}
                alt="error"
            />
          


        </>
    )
}