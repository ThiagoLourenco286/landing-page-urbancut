import { Clock } from "lucide-react";

interface CardProps {
    title: string
    subtitle: string
    paragrafo: string
    span: string
}

export function CardSection({ title, subtitle, paragrafo, span }: CardProps) {
    return (
        <div className="h-52 w-60 p-7 md:h-60 md:w-64 md:p-9 bg-cinza-100 relative">
            <Clock className="text-dourado-100 absolute top-3 right-3" />
            <div className="flex flex-col gap-4">
                <h3 className="text-dourado-100 text-2xl font-black">{title}</h3>
                <sub className="text-white uppercase font-bold text-[18px]">{subtitle}</sub>
            </div>
            <div className="flex flex-col pt-10 gap-8">
                <p className="text-gray-100 text-xs">
                    {paragrafo}
                </p>
                <span className="text-gray-100 text-xs flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    {span}
                </span>
            </div>
        </div>
    )
}