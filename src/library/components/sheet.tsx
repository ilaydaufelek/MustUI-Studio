'use client'
import { cn } from "@/lib/utils";
import React, { useState , createContext, useContext, HTMLAttributes, useEffect} from "react"

interface SheetContextProps {
open:boolean;
setOpen:(value:boolean)=>void;
}

interface SheetProps extends HTMLAttributes<HTMLDivElement> {
children:React.ReactNode
className?:string
}

interface SheetTriggerProps extends HTMLAttributes<HTMLButtonElement> {
  children:React.ReactNode;
  className?:string
}

interface SheetContentProps extends HTMLAttributes<HTMLDivElement> {
children:React.ReactNode;
className?:string
side?:'left' | 'right' |'top' |'bottom'
}

interface SheetHeader extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

const sides: Record<string, string> = {
  left: "left-0 h-screen w-[260px] md:w-[360px]   ",
  right: "right-0 h-screen w-[260px] md:w-[360px]  ",
  top: "top-0 w-screen h-auto",
  bottom: "bottom-0 w-screen h-auto"
};

export  const SheetContext=createContext<SheetContextProps | null> (null) 

export const Sheet=({children,className, ...props}:SheetProps)=>{
 const [open,setOpen]=useState(false)
 return(
   <div className={cn(className)}{...props} >
     <SheetContext.Provider  value={{open,setOpen}} >
      {children}
    </SheetContext.Provider>
   </div>
 )
}

export const SheetTrigger=({children,className, ...props}:SheetTriggerProps)=>{
  const ctx=useContext(SheetContext)
  if(!ctx) throw new Error("Sheet Trigger must be used within Sheet ")
    return(
  <button onClick={()=>ctx.setOpen(true)} className={cn('border dark:border-zinc-200/30 border-zinc-700/20  cursor-pointer rounded-md px-2 py-1 font-medium',className)}{...props} >
   {children}
  </button>
  )
}

export const SheetContent=({children,className, side='right',...props }:SheetContentProps)=>{
  const ctx=useContext(SheetContext)
  if(!ctx) throw new Error("Sheet Content must be used within Sheet ")
    useEffect(()=> {
    if(ctx.open){
      document.body.style.overflow="hidden"
    }
    else{
      document.body.style.overflow=""
    }
    return()=>{
      document.body.style.overflow=""
    }
  },[ctx.open])

  if(!ctx.open) return null

  

  return(
       <div onClick={()=>ctx.setOpen(false)}
    className="fixed inset-0 z-50 backdrop-blur-md"
    {...props}>
  
    <div
      className={cn(
        "h-screen w-[300px] bg-white dark:bg-black absolute p-2 rounded-md shadow-md ",
        sides[side]
      )}
    >
      {children}
    </div>
  </div>
  )

}

export const SheetHeader=()=>{
  return(
    <div>

    </div>
  )
}