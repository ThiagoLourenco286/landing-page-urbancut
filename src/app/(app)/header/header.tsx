'use client'

import { Button } from "@/components/ui/button";
import { ActiveLink } from "./active-link/active-link";
import { Logo } from "./logo/logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {

    const [open, setIsOpen] = useState(false)

    function handleToogle() {
        setIsOpen((prev) => !prev)
    }
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-preto-100 p-5">
            <div className="flex items-center justify-between">
                <Logo />
                <nav className="hidden items-center gap-4 md:flex">
                    <ActiveLink href='/'>Inicio</ActiveLink >
                    <ActiveLink href='/serviços'>Serviços</ActiveLink>

                    <Button className="bg-dourado-100 font-sans text-xm uppercase">
                        Agendar
                    </Button>
                </nav>

                <button type="button" className="md:hidden" onClick={handleToogle}>
                    {open ? (
                        <X className="text-white" />
                    ) : (
                        <Menu className="text-white" />
                    )}
                </button>
            </div>

            {open && (
                <nav className="mt-4 flex flex-col gap-4 md:hidden">
                    <ActiveLink href='/'>Inicio</ActiveLink >
                    <ActiveLink href='/serviços'>Serviços</ActiveLink>

                    <Button className="bg-dourado-100 font-sans text-xm uppercase">
                        Agendar
                    </Button>
                </nav>
            )}
        </header >
    )
}