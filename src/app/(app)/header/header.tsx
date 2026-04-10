import { Button } from "@/src/components/ui/button";
import { ActiveLink } from "./active-link/active-link";
import { Logo } from "./logo/logo";
import Link from "next/link";
import { MenuHamburguer } from "./menu-hambuerger/menu-hamburguer";


export function Header() {
    return (
        <header className="fixed border-b w-full top-0 z-50 border-white/10">
            <div className="px-8">
                <nav className="flex h-16 items-center justify-between">
                    <Logo />
                    <div className="md:hidden">
                        <MenuHamburguer />
                    </div>

                    <div className="hidden md:flex items-center gap-4 ">
                        <ActiveLink href='/'>Inicio</ActiveLink>
                        <ActiveLink href='/serviços'>Serviços</ActiveLink>

                        <Button className="bg-dourado-100 font-sans text-xm uppercase">
                            Agendar
                        </Button>
                    </div>
                </nav>
            </div>
        </header >
    )
}