import { Button } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { Calendar1, CheckCircle2, Scissors } from "lucide-react";
import Link from "next/link";



export function CallToAction() {
    return (
        <section className="flex justify-center mb-16 float">
            <div className="flex flex-col justify-center items-center gap-5 text-center w-120 p-10 bg-cinza-100/20 shadow-xl  
            rounded-xl  shadow-cinza-100/90">
                <div className="h-4 bg-cinza-100 rounded-full w-fit px-5 flex py-4 items-center border border-white/10 gap-2 shadow-2xl">
                    <Scissors className="text-dourado-100 h-4" />
                    <span className="uppercase text-white text-xs">Novo Estilo</span>
                </div>
                <h2 className="text-5xl  uppercase md:text-5xl text-dourado-100 italic font-black">
                    <span className="text-white">Transforme </span>
                    seu Visual
                </h2>

                <p className="text-gray-100 text-center font-light leading-6">O cuidado que seu visual merece, com a técnica e o estilo que destacam sua personalidade. Desperte sua melhor versão hoje.</p>

                <div>
                    <Button className="bg-dourado-100 font-sans flex items-center  shadow-2xl" asChild>
                        <Link href='/Agendar'>
                            <Calendar1 />
                            Agendar Agora
                        </Link>
                    </Button>
                </div>
                <Separator className="bg-white/20" />
                <div className="flex gap-5 text-gray-100">
                    <span className="flex items-center gap-2 hover:text-dourado-100 transform duration-300">
                        <CheckCircle2 className="w-4" />
                        Seguro
                    </span>
                    <span className="flex items-center gap-2 hover:text-dourado-100 transform duration-300">
                        <CheckCircle2 className="w-4" />
                        Rápido

                    </span>
                    <span className="flex items-center gap-2 hover:text-dourado-100 transform duration-300">
                        <CheckCircle2 className="w-4" />
                        Exclusivo
                    </span>
                </div>
            </div>
        </section>
    )
}