import { Scissors } from "lucide-react"

export function Logo({ ...className }) {
    return (
        <h1 className="font-black italic text-3xl uppercase flex items-center gap-2" {...className}>
            <span className="bg-dourado-100 px-2 py-2 flex w-fit rounded-md">
                <Scissors className="text-black relative" />
            </span>
            <span className="text-dourado-100">
                <span className="text-white">URBAN</span>
                CUT
            </span>
        </h1>
    )
}