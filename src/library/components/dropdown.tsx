import { cn } from "@/lib/utils";
import React, {createContext,useContext,  useState} from "react"

interface DropdownContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string
     open?: boolean
  onOpenChange?: (open: boolean) => void
}

interface DropdownMenuTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
     asChild?: boolean
}   

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string
    side?:"left" | "right"|"top" | "bottom"
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?:React.ReactNode;
    className?:string
}

const sides: Record<string, string> = {
  bottom: "top-[100%] left-0",
  top: "bottom-[100%] left-0",
  right: "left-full top-0 mx-1",
  left: "right-full top-0 mx-1",
}

const sideAnimation = {
  left: {
    open: "translate-x-0",
    closed: "translate-x-0 opacity-0 pointer-events-none",
  },
  right: {
    open: "translate-x-0",
    closed: "translate-x-0 opacity-0 pointer-events-none",
  },
  top: {
    open: "translate-y-0 ",
    closed: " opacity-0 pointer-events-none",
  },
  bottom: {
    open: "translate-y-0",
    closed: " opacity-0 pointer-events-none",
  },
}

const DropdownContext=createContext<DropdownContextType | null>(null)

export const DropdownMenu=({children,className, open:controlledOpen, onOpenChange,...props}: DropdownMenuProps & React.HTMLAttributes<HTMLDivElement>)=>{
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false)

  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = onOpenChange ?? setUncontrolledOpen
   return(
    <DropdownContext.Provider value={{open,setOpen}}>
       <div className={cn("relative inline-block  py-2",className)}{...props} >
         {children}
       </div>
    </DropdownContext.Provider>
   )
    
}

export const DropdownMenuTrigger=({children,className,asChild,...props}:DropdownMenuTriggerProps)=>{
 const ctx=useContext(DropdownContext)
 if (!ctx) throw new Error("DropdownTrigger must be used within DropdownMenu");
 const handleClick=()=>{
  ctx.setOpen(!ctx.open)
 }


 return (
 <div className={cn("px-2 py-2 border flex items-center border-zinc-600/30 rounded-md cursor-default overflow-hidden font-semibold  ",className)}
 onClick={handleClick}
  {...props} >
    {children}
    
    </div>
  )
}

export const DropdownMenuContent=({children,className,side="bottom" ,...props}:DropdownMenuContentProps)=>{
    
    const ctx = useContext(DropdownContext);
    
  if (!ctx) throw new Error("DropdownMenuContent must be used within DropdownMenu")

  return (
    <div
      className={cn(
        "absolute min-w-full rounded-md border border-zinc-700/25 dark:bg-zinc-950 bg-white",
        "transition-all duration-200 ease-out",
        sides[side],
         ctx.open ? sideAnimation[side].open : sideAnimation[side].closed,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export const DropdownMenuItem=({children,className,...props}:DropdownMenuItemProps)=>{
    const ctx=useContext(DropdownContext)
   return(
    <div 
    onClick={()=>ctx?.setOpen(false)}
     className={cn("p-1 m-1   hover:bg-zinc-300/40 dark:hover:bg-zinc-800/30 cursor-default rounded-sm text-sm font-medium  ",className)}{...props} >
       {children}  
    </div>
   )
}