import { cn } from "@/lib/utils";
import React, {createContext,useContext,  useState} from "react"

interface DropdownContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string
}

interface DropdownMenuTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
}   

interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string
}

interface DropdownMenuItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children?:React.ReactNode;
    className?:string
}

const DropdownContext=createContext<DropdownContextType | null>(null)

export const DropdownMenu=({children,className,...props}:DropdownMenuProps)=>{
   const[open,setOpen]=useState(false)
   return(
    <DropdownContext.Provider  value={{open,setOpen}}>
       <div className={cn("relative inline-block  py-2",className)}{...props} >
         {children}
       </div>
    </DropdownContext.Provider>
   )
    
}

export const DropdownMenuTrigger=({children,className,...props}:DropdownMenuTriggerProps)=>{
 const ctx=useContext(DropdownContext)
 if (!ctx) throw new Error("DropdownTrigger must be used within DropdownMenu");
 return <div className={cn("px-2 py-2 border flex items-center border-zinc-600/30 rounded-md cursor-default overflow-hidden  ",className)}
 onClick={()=>ctx?.setOpen(!ctx.open)}
  {...props} >
    {children}
    </div>
}

export const DropdownMenuContent=({children,className, ...props}:DropdownMenuContentProps)=>{
    
    const ctx = useContext(DropdownContext);


  if (!ctx) throw new Error("DropdownMenuContent must be used within DropdownMenu");
  if (!ctx.open) return null   
    return (
     <div 
      className={cn("absolute top-full w-full    shadow-2xl rounded-md border border-zinc-700/25 dark:bg-zinc-950 bg-white ",className)} {...props} >
        {children}
      </div>
    )

   
}

export const DropdownMenuItem=({children,className,...props}:DropdownMenuItemProps)=>{
    const ctx=useContext(DropdownContext)
   return(
    <div 
    onClick={()=>ctx?.setOpen(false)}
     className={cn("p-1 m-1 hover:bg-zinc-300/40 dark:hover:bg-zinc-800/30 cursor-default rounded-md text-sm font-medium  ",className)}{...props} >
       {children}  
    </div>
   )
}