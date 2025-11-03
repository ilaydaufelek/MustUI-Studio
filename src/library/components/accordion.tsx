"use client"
import { cn } from "@/lib/utils";
import { ChevronDown} from "lucide-react";
import React, { useContext,createContext,useState } from "react"

interface AccordionContextType{
   openItem: string | null
  setOpenItem: (value: string | null) => void
    
}

interface AccordionItemContextType{
     value:string;
    
}


interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
 children:React.ReactNode;
 className?:string;

}

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode;
    className?:string;
    value:string
    
   
}

interface AccordionTriggerProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode;
    className?:string
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
   children:React.ReactNode;
   className?:string
}


const AccordionContext=createContext<AccordionContextType | null>(null)
const AccordionItemContext=createContext<AccordionItemContextType |null>(null)

export const Accordion=({children,className,...props}:AccordionProps)=>{
    const [openItem, setOpenItem] = useState<string | null>(null)
    return(
       <AccordionContext.Provider value={{openItem, setOpenItem }}>
         <div className={cn("relative inline-block  py-2 p-8   ",className)}{...props} >
      {children}
      </div>
       </AccordionContext.Provider>
    )
}


export const AccordionItem=({children,className,value,...props}:AccordionItemProps)=>{
    const ctx =useContext(AccordionContext)
    if(!ctx) throw new Error("AccordionItem must be used within Accordion ")
    return(
     <AccordionItemContext.Provider value={{value}} >
      <div className={cn(" p-2 ", className)} {...props}>
        {children}
      </div>
      <div className="w-full h-[0.3px]  bg-zinc-600/20 last:hidden" ></div>
   </AccordionItemContext.Provider>
)
}


export const AccordionTrigger=({children,className,...props}:AccordionTriggerProps)=>{
    const ctx = useContext(AccordionContext)
    const item=useContext(AccordionItemContext)
    const isOpen=ctx?.openItem === item?.value
     if (!ctx || !item)
    throw new Error("AccordionTrigger must be used within AccordionItem")

  return (
    <div
      onClick={()=>ctx?.setOpenItem(isOpen ? null : item?.value)}
      className={cn("flex items-center justify-between cursor-pointer font-semibold text-md ", className)}
      {...props}
    >
      {children}
      <div
  className={cn(
    "transition-transform duration-500 flex items-center justify-center  ",
    isOpen ? "rotate-180" : "rotate-0"
  )}
>
  <ChevronDown className="w-4 h-4 text-zinc-500" />
</div>
    </div>
  )
}

export const AccordionContent=({children,className,...props}:AccordionContentProps)=>{
     const ctx = useContext(AccordionContext)
     const item = useContext(AccordionItemContext)
    if (!ctx || !item)
    throw new Error("AccordionContent must be used within AccordionItem")
   if(ctx?.openItem !==item?.value) return null

  return (
    <div className={cn("mt-2 text-sm text-zinc-500 ", className)} {...props}>
      {children}
    </div>
  )
}

