import Image from "next/image";

interface CardProps {
    title: string
    avaliation: string
    image: string
    name: string
}

export function CardAvaliation({ title, avaliation, image, name }: CardProps) {
    return (
        <div className="w-96 bg-cinza-100 h-82 p-5 flex flex-col gap-5 rounded-lg border border-white/20">
            <h5 className="text-white">
                {title} ⭐⭐⭐⭐⭐
            </h5>
            <span className="text-white text-sm">
                {avaliation}
            </span>

            <div className="flex text-white items-center gap-2 ">
                <Image src={image} width='36' height='36' alt="icon" />
                <span>
                    {name}
                </span>
            </div>
        </div>
    )
}