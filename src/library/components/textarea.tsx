import { cn } from "@/lib/utils"

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?:string
  }

 export const Textarea=({className,...props}:TextareaProps)=>{
 return(
    <textarea
      className={cn(
       "w-[250px] h-20 min-w-24 rounded-md p-2  transition-colors  text-sm",
    "border border-zinc-300 dark:border-zinc-600",
    "focus:outline-none",
    "focus:ring-2 focus:ring-zinc-500/25   dark:focus:ring-zinc-100/25  focus:ring-offset-0",className)}

       {...props}
    />
 )
} 