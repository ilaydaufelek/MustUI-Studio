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

interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

interface SheetTitleProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}


interface SheetDescriptionProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {
className?:string;
children:React.ReactNode
}

interface SheetCloseProps {
  asChild?: boolean
  children: React.ReactElement<{
    onClick?: React.MouseEventHandler
  }>
}

const sides: Record<string, string> = {
  left: "left-0 w-[260px] md:w-[360px]",
  right: "right-0 w-[260px] md:w-[360px]",
  top: "top-0 w-screen min-h-[260px] max-h-[380px] ",
  bottom: "bottom-0 w-screen min-h-[260px] max-h-[380px] "
}
const sideAnimation = {
  left: {
    open: "translate-x-0",
    closed: "-translate-x-full",
  },
  right: {
    open: "translate-x-0",
    closed: "translate-x-full",
  },
  top: {
    open: "translate-y-0",
    closed: "-translate-y-full",
  },
  bottom: {
    open: "translate-y-0",
    closed: "translate-y-full",
  },
}

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

export const SheetContent = ({
  children,
  className,
  side = "right",
}: SheetContentProps) => {
  const ctx = useContext(SheetContext)
  if (!ctx) throw new Error("Sheet Content must be used within Sheet")

  useEffect(() => {
    document.body.style.overflow = ctx.open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [ctx.open])
  
  return (
    <div
      onClick={() => ctx.setOpen(false)}
      className={cn(
        "fixed inset-0 z-50 ",
        ctx.open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none transition-opacity duration-300"
      )}
    >
      
      <div className="absolute inset-0 backdrop-blur-md bg-black/30" />

    
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "absolute p-2 h-[100dvh] bg-white dark:bg-black shadow-md border border-zinc-600/20 flex flex-col",
          "transition-transform duration-300 ease-out",
          sides[side],
          ctx.open ? sideAnimation[side].open : sideAnimation[side].closed,
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export const SheetHeader=({children,className,...props}:SheetHeaderProps)=>{
  const ctx=useContext(SheetContext)
  return(
    <div className={cn('flex items-center justify-between ',className)}{...props} >
      {children}
    <div 
    onClick={()=>ctx?.setOpen(false)}
     className="w-6 h-6 border text-sm cursor-pointer border-zinc-600 rounded-md  flex items-center justify-center" >X</div>
    </div>
  
)}

export const SheetTitle=({children,className,...props}:SheetTitleProps)=>{
  return(
    <div className={cn('font-semibold',className)}{...props} >
     {children}
    </div>
  )
}

export const SheetDescription=({children,className,...props}:SheetDescriptionProps)=>{
  return(
    <div className={cn('text-sm text-zinc-500 mt-3',className)}{...props} >
     {children}
    </div>
  )
}

export const SheetFooter=({children,className,...props}:SheetFooterProps)=>{
  return(
    <div className={cn('mt-auto flex flex-col gap-2 w-full bg-white dark:bg-black',className)}{...props} >
     {children}
    </div>
  )
}

export const SheetClose = ({ children, asChild }: SheetCloseProps) => {
  const ctx = useContext(SheetContext)
  if (!ctx) throw new Error("SheetClose must be used within Sheet")

  const handleClose = () => {
    ctx.setOpen(false)
  }

  if (asChild) {
    return React.cloneElement(children, {
      onClick: handleClose
    })
  }

  return (
    <button onClick={handleClose}>
      {children}
    </button>
  )
}

