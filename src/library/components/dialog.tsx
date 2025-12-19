'use client'

import { cn } from "@/lib/utils";
import React, { useState , createContext, useContext, useEffect} from "react"

interface DialogContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
}
interface DialogTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode
    className?:string
}

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode,
        className?:string
    
}

interface DialogTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode,
  className?:string
}

interface DialogDescriptionProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode
    className?:string
}

interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    className?:string
}
interface DialogCancelProps extends React.HTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode
    className?:string
}

interface DialogSubmitProps  extends React.HTMLAttributes<HTMLButtonElement> {
    children:React.ReactNode;
    onSubmit?:()=>void;
    className?:string
}
const DialogContext= createContext<DialogContextType |null>(null)

  export const Dialog=({children,className,...props}:DialogProps)=>{
    const [open,setOpen]=useState(false)
    return(
       <div className={cn(className)} {...props} >
         <DialogContext.Provider value={{open,setOpen}} >
        {children}
        </DialogContext.Provider>
       </div>
    )

 }

 export const DialogTrigger=({children,className,...props}:DialogTriggerProps)=>{
  const ctx=useContext(DialogContext);
  if(!ctx) throw new Error("DialogTrigger must be used within Dialog")
    return <button className={cn(" border dark:border-zinc-200/30 border-zinc-700/20  cursor-pointer rounded-md px-2 py-1 font-medium",className )} {...props} onClick={()=>ctx.setOpen(true)} >{children}</button>
 }

 export const DialogContent=({children,className,...props}:DialogContentProps)=>{
   const ctx=useContext(DialogContext);
    if (!ctx) throw new Error("DialogContent must be used within Dialog")
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
    
    if (!ctx.open) return null   
    
    return(
       <div
       onClick={()=>ctx.setOpen(false)}
       className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
           <div
        {...props}
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "dark:bg-zinc-900 p-8 dark:text-white md:w-[450px] w-[350px] bg-white text-black rounded-lg relative",
          className
        )}
      >
        {children}
         <button
          onClick={() => ctx.setOpen(false)}
          className="absolute top-2 right-2 text-sm text-gray-500"
        >
          ✕
        </button>

        </div>

       </div>  
    )
 }

 export const DialogTitle=({children,className,...props}:DialogTitleProps)=>{
    return(
        <div className={cn("text-xl font-semibold",className)}{...props}>
        {children}
        </div>
    )
 }

 export const DialogDescription=({children,className,...props}:DialogDescriptionProps)=>{
     return(
        <div className={cn("text-sm mt-2 ",className)}{...props}>
         {children}
        </div>
     )
 }

 export const DialogFooter=({children,className,...props}:DialogFooterProps)=>{
   return(
    <div className={cn("flex items-center justify-end space-x-5 mt-5 ",className)}{...props} >
    {children}
    </div>
   )
 }

 export const DialogCancel=({children,className,...props}:DialogCancelProps)=>{
    const ctx=useContext(DialogContext)
    return(
        <button className={cn("border border-zinc-300 cursor-pointer px-2 py-1 font-semibold rounded-md ",className)} {...props} onClick={()=>ctx?.setOpen(false)} >{children}</button>
    )

 }

 export const DialogSubmit=({children,onSubmit,className,...props}:DialogSubmitProps)=>{
    const ctx=useContext(DialogContext)
     return(
        <button  className={cn("dark:bg-white bg-zinc-900  dark:text-black text-white dark:hover:bg-white/90 hover:bg-zinc-900/90 cursor-pointer px-2 py-1 font-semibold rounded-md ",className)}
         onClick={()=>{
            if(onSubmit) onSubmit();
            ctx?.setOpen(false)
         }}{...props} >{children}</button>
    )

 }