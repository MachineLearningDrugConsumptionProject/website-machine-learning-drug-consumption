'use client'

import { cn } from "@/utils/cn"
import { useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

interface HomeTeamCardProps {
    image: string,
    name: string,
    className?: string
}

export default function HomeTeamCard({ image, name, className }: HomeTeamCardProps) {

    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })

    return (
        <div ref={ref} className={cn('flex flex-col h-fit w-[24vw] bg-dark-background transition-opacity duration-500 opacity-0', className,
            { 'opacity-100': isInView }
        )}>
            <Image
                width={0}
                height={0}
                sizes={"100vw"} src={image} alt="team-image" className="w-full h-[48vh] object-cover shadow" />
            <div className="flex-col w-full px-6 py-4 text-lg font-medium text-dark-accent">
                {name}
            </div>
        </div>
    )
}