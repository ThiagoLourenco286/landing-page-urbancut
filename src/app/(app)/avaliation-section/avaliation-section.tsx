import { CardAvaliation } from "./card-avaliation";

export function AvaliationSection() {
    return (
        <section className="px-6 md:px-9 ">
            <div className="flex flex-col gap-8">
                <div className="w-24 h-1 bg-dourado-100 rounded-full" />
                <h2 className="uppercase text-dourado-100 italic font-black text-3xl md:text-6xl">
                    <span className="text-white">Feed</span>
                    Back
                </h2>
            </div>
            <div className=" flex flex-col items-center px-14 gap-5 mt-10 md:flex md:flex-row md:justify-center">
                <CardAvaliation title="Mais profissional"
                    avaliation='“Excelente experiência! Desde o atendimento na recepção até o resultado final do corte, tudo foi impecável. 
                O barbeiro foi muito atencioso, entendeu exatamente o que eu queria e entregou um corte extremamente bem feito. 
                Ambiente limpo, organizado e com uma vibe muito agradável. 
                Com certeza voltarei e recomendo para quem busca qualidade e profissionalismo.”'
                    image="/customer-02.png"
                    name="Lucas Andrade" />

                <CardAvaliation title="Mais informal e descontraída"
                    avaliation='“Excelente experiência! Desde o atendimento na recepção até o resultado final do corte, tudo foi impecável. O barbeiro foi muito atencioso, entendeu exatamente o que eu queria e entregou um corte extremamente bem feito. Ambiente limpo, organizado e com uma vibe muito agradável. Com certeza voltarei e recomendo para quem busca qualidade e profissionalismo.”'
                    image="/customer-01.png"
                    name="Rafaela Souza" />

                <CardAvaliation title="Mais informal e descontraída"
                    avaliation='““Excelente experiência! Desde o atendimento na recepção até o resultado final do corte, tudo foi impecável. O barbeiro foi muito atencioso, entendeu exatamente o que eu queria e entregou um corte extremamente bem feito. Ambiente limpo, organizado e com uma vibe muito agradável. Com certeza voltarei e recomendo para quem busca qualidade e profissionalismo.”'
                    image="/customer-01.png"
                    name="Rafaela Souza" />
            </div>
        </section >
    )
}