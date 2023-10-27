import Image from "next/image"

export default function Marmitas11() {
    return (
        <main >

            <div className="flex">
                <h1 className="flex ml-1 mt-1">
                    <Image
                        height={350}
                        width={350}
                        src={'/frango.webp'}
                        alt="marmita de frango"
                    />
                </h1>

                <h1 className="flex ml-1 mt-1">
                    <Image
                        height={350}
                        width={350}
                        src={'/carne.jpg'}
                        alt="marmita de frango"
                    />
                </h1>
            </div>
            <button>finalizar pedido</button>
            
        </main>
    )
}