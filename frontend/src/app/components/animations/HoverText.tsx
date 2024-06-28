import { cn } from "@/utils/cn"

interface HoverTextProps {
    text: string,
    className?: string
}

export default function HovertText({ text, className }: HoverTextProps) {

    return (
        <div className="flex flex-col w-full h-full relative group">
            <p className={cn('py-2', className)}>
                {text}
            </p>
            <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-dark-background to-dark-accent w-0 group-hover:w-full transition-all duration-200"></div>
        </div>
    )
}