import * as React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variants = {
    default: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    secondary: "bg-zinc-500/20 text-zinc-300 border-zinc-500/30",
    destructive: "bg-red-500/20 text-red-300 border-red-500/30",
    outline: "border-white/20 text-white/80",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
