'use client'

import React, { useState , createContext, useContext} from "react"

interface DialogContextType{
    open:boolean;
    setOpen:(value:boolean)=>void;
}
interface DialogProps{
    children:React.ReactNode
}
interface DialogTriggerProps{
    children:React.ReactNode
}

interface DialogContentProps{
    children:React.ReactNode
    
}

interface DialogTitleProps{
    children:React.ReactNode
}

interface DialogDescriptionProps{
    children:React.ReactNode
}

interface DialogFooterProps{
    children:React.ReactNode
}
interface DialogCancelProps{
    children:React.ReactNode
}

interface DialogSubmitProps{
    children:React.ReactNode;
    onSubmit?:()=>void;
}
const DialogContext= createContext<DialogContextType |null>(null)

  export const Dialog=({children}:DialogProps)=>{
    const [open,setOpen]=useState(false)
    return(
        <DialogContext.Provider value={{open,setOpen}} >
        {children}
        </DialogContext.Provider>
    )

 }

 export const DialogTrigger=({children}:DialogTriggerProps)=>{
  const ctx=useContext(DialogContext);
  if(!ctx) throw new Error("DialogTrigger must be used within Dialog")
    return <div className=" border dark:border-zinc-200/30 border-zinc-700/20  cursor-pointer rounded-md px-2 py-1 font-medium"  onClick={()=>ctx.setOpen(true)} >{children}</div>
 }

 export const DialogContent=({children,}:DialogContentProps)=>{
   const ctx=useContext(DialogContext);
    if (!ctx) throw new Error("DialogContent must be used within Dialog")
    if (!ctx.open) return null   
    
    return(
       <div
       onClick={()=>ctx.setOpen(false)}
       className="fixed inset-0 z-40 flex items-center justify-center bg-black/50">
        <div
        onClick={(e)=>e.stopPropagation()}
        className="dark:bg-zinc-900 p-8 dark:text-white md:w-[450px] w-[350px] bg-white text-black rounded-lg relative">
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

 export const DialogTitle=({children}:DialogTitleProps)=>{
    return(
        <div className="text-xl font-semibold">
        {children}
        </div>
    )
 }

 export const DialogDescription=({children}:DialogDescriptionProps)=>{
     return(
        <div className="text-sm mt-2 ">
         {children}
        </div>
     )
 }

 export const DialogFooter=({children}:DialogFooterProps)=>{
   return(
    <div className="flex items-center justify-end space-x-5 mt-5 " >
    {children}
    </div>
   )
 }

 export const DialogCancel=({children}:DialogCancelProps)=>{
    const ctx=useContext(DialogContext)
    return(
        <button className="border border-zinc-300 cursor-pointer px-2 py-1 font-semibold rounded-md " onClick={()=>ctx?.setOpen(false)} >{children}</button>
    )

 }

 export const DialogSubmit=({children,onSubmit}:DialogSubmitProps)=>{
    const ctx=useContext(DialogContext)
     return(
        <button  className="dark:bg-white bg-zinc-900  dark:text-black text-white dark:hover:bg-white/90 hover:bg-zinc-900/90 cursor-pointer px-2 py-1 font-semibold rounded-md "
         onClick={()=>{
            if(onSubmit) onSubmit();
            ctx?.setOpen(false)
         }} >{children}</button>
    )

 }