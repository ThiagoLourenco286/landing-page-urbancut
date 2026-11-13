import { CardSection } from "./card-section/card-section";

export function FatureSection() {
    return (
        <section className="px-6 md:px-9 fade-up">
            <div className="flex flex-col w-full">
                <div className="flex flex-col gap-8">
                    <div className="w-24 h-1 bg-dourado-100 rounded-full underline-draw" />
                    <h2 className="uppercase text-dourado-100 italic font-black text-3xl md:text-6xl">
                        <span className="text-white">Nossos </span>
                        serviços
                    </h2>
                </div>

                <div className="mt-12 flex flex-col justify-center items-center gap-2 md:flex md:flex-row md:gap-10">
                    <CardSection title="R$ 65" subtitle="Corte Clássico" paragrafo="Corte tradicional com acabamento" span="45 MIN" />
                    <CardSection title="R$ 50" subtitle="Barba de Mestre" paragrafo="Toalha quente e óleos essenciais" span="30 MIN" />
                    <CardSection title="R$ 100" subtitle="Combo Signature" paragrafo="A experiencia de estilo" span="75 MIN" />
                    <CardSection title="R$ 45" subtitle="Corte Kids" paragrafo="Estilo para a próxima geração" span="30 MIN" />
                </div>
            </div>
        </section>
    )
}