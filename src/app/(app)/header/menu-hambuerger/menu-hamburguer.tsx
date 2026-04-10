'use client'
import { Menu } from "lucide-react";
import { ActiveLink } from "../active-link/active-link";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";

export function MenuHamburguer() {

    const [open, setIsOpen] = useState(false)

    function handleToogle() {
        setIsOpen(!open)
    }

    return (
        <>

            {
                open ? (
                    <button onClick={handleToogle} className="fixed top-5 right-12">
                        <Menu className="text-white" />
                    </button>
                ) : (
                    <div className="fixed right-3 flex flex-col">
                        <button onClick={handleToogle} className="fixed top-5 right-12">
                            <Menu className="text-white" />
                        </button>
                        <div className="flex flex-col items-center gap-2 pt-8">
                            <ActiveLink href='/'>Inicio</ActiveLink >
                            <ActiveLink href='/serviços'>Serviços</ActiveLink>

                            <Button className="bg-dourado-100 font-sans text-xm uppercase">
                                Agendar
                            </Button>
                        </div>
                    </div >
                )
            }
        </>
    )
}