import { cn } from "@/utils/cn"

interface SlideDownToolTipProps {
    data: string[] | null,
    className?: string,
}

export function ToolTip({ data, className }: SlideDownToolTipProps) {

    return (
        <div className={
            cn("absolute translate-x-[125%] -translate-y-1/2 w-fit h-fit grid grid-cols-1 items-center bg-white transition-all duration-300 scale-y-0 rounded-lg border-none z-20",
                className
            )}>

            {data?.map((item, index) => (
                (
                    <div key={index} className={`px-4 py-2 w-full h-full ${index < (data.length - 1) ? 'border-b' : ''} border-gray-300`}>
                        <p className="text-base font-medium">{item}</p>
                    </div>
                )
            ))}

            {data != null &&
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 
                border-y-[10px] border-y-transparent 
                border-r-[10px] border-r-white
                pointer-events-none"></div>
            }
        </div>
    )
}