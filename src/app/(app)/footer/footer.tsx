
import { Facebook, Instagram, Phone } from "lucide-react";
import { Logo } from "../header/logo/logo";

export function Footer() {
    return (
        <footer className=" bg-cinza-100 ">
            <div className="flex flex-col items-center pt-3 gap-5 md:flex md:flex-row md:justify-between px-8 text-gray-100 uppercase font-light ">
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <Logo className='text-2xl flex items-center font-black italic gap-2' />
                    <span className="text-sm">Desde 2014</span>
                </div>

                <div className="flex gap-3">
                    <Instagram />
                    <Facebook />
                    <Phone />
                </div>

                <div>
                    <span className="">
                        @ 2024 Urbancut Barbearia
                    </span>
                </div>
            </div>
        </footer>
    )
}