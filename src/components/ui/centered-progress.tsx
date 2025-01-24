import React from "react"

interface CenteredProgressProps {
    value: number
    className?: string
}

export function CenteredProgress({ value, className = "" }: CenteredProgressProps) {
    const leftWidth = value / 2
    const rightWidth = value / 2

    return (
        <div className={`relative h-[1px] ${className}`}>
            <div className="absolute top-0 right-1/2 h-full bg-primary/60 rounded-l-sm" style={{ width: `${leftWidth}%` }} />
            <div className="absolute top-0 left-1/2 h-full bg-primary/60 rounded-r-sm" style={{ width: `${rightWidth}%` }} />
        </div>
    )
}

