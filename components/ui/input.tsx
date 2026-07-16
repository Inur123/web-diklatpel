import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-11 w-full min-w-0 rounded-lg border border-[#262626] bg-transparent px-3.5 py-2 text-base transition-colors outline-none focus:outline-none focus:!border-[#f97316] focus:!ring-1 focus:!ring-[#f97316] focus-visible:outline-none focus-visible:!border-[#f97316] focus-visible:!ring-1 focus-visible:!ring-[#f97316] disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive md:text-sm dark:bg-input/30 dark:disabled:bg-input/80",
        className
      )}
      {...props}
    />
  )
}

export { Input }
