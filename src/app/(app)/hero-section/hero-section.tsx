import Reveal from "@/src/components/reveal";
import { Medal } from "lucide-react";

export function HeroSection() {
    return (
        <Reveal delay={200} className="flex justify-center">
            <section className="w-100 flex flex-col items-center space-y-9">
                <div className="h-4 bg-cinza-card rounded-full px-5 flex py-4 items-center border border-white/10 gap-2">
                    <Medal className="text-dourado-100 h-4" />
                    <span className="uppercase text-white text-xs">Eleita a melhor de 2024</span>
                </div>
                <div className="flex flex-col gap-5 text-center">
                    <h2 className="text-5xl  uppercase md:text-9xl text-dourado-100 italic font-black">
                        <span className="text-white ">Estilo é </span>
                        Tradição
                    </h2>
                    <p className="text-gray-100 text-center font-light leading-6">Resgatando a essência da barbearia
                        clássica com um toque contemporâneo. No centro de São Paulo.</p>
                </div>
            </section>
        </Reveal>
    )
}