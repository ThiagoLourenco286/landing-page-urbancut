'use client'

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type ActiveLinkProps = {
    children: React.ReactNode
} & LinkProps

export function ActiveLink({ children, href, ...props }: ActiveLinkProps) {

    const pathname = usePathname()
    const isCurrentPath = pathname === href || pathname === props.as

    return (
        <Link href={href} className={cn(
            'text-white font-light leading-6 uppercase',
            isCurrentPath ? 'text-dourado-100' : 'text-white'
        )}>
            {children}
        </Link>
    )
}