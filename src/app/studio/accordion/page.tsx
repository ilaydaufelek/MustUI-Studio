'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { Accordion, AccordionContent, AccordionItem,  AccordionTrigger } from "must-ui/accordion"
import {  Code2,  Copy,  CopyCheck,  Gauge, HandHelping, Palette, } from "lucide-react"
import { Button } from "must-ui/button"
import { Installation } from "@/components/installation"
import { useState } from "react"
import CodeBlock from "@/components/code-block"


const items = [
  {
    id: "1",
    icon: Code2,
    title: "Developer-first design",
    content:
      "MustUI is built to ship fast. Composable architecture, predictable component APIs, and examples that actually make sense.",
  },
  {
    id: "2",
    icon: Palette,
    title: "Modern styling freedom",
    content:
      "Tailwind? Yes. Custom CSS? Yes. Theme tokens and dark mode? Already included. No lock-in, no drama.",
  },
  {
    id: "3",
    icon: Gauge,
    title: "Optimized for real performance",
    content:
      "Minimal runtime footprint. No heavy dependencies. We squeeze out every millisecond — because users deserve speed.",
  },
  {
    id: "4",
    icon: HandHelping, 
    title: "Production-ready accessibility",
    content:
      "Accessible by default. Tested with screen readers and strict contrast rules. Inclusivity is not optional here.",
  },
]

const usageCopy=`
  import { Accordion,
   AccordionContent, 
   AccordionItem, 
   AccordionTrigger } from "must-ui/accordion"

   import { Code2,
   Gauge,
   HandHelping,
  Palette, } from "lucide-react"
  
  const items = [
  {
    id: "1",
    icon: Code2,
    title: "Developer-first design",
    content:
      "MustUI is built to ship fast. Composable architecture, predictable component APIs, and examples that actually make sense.",
  },
  {
    id: "2",
    icon: Palette,
    title: "Modern styling freedom",
    content:
      "Tailwind? Yes. Custom CSS? Yes. Theme tokens and dark mode? Already included. No lock-in, no drama.",
  },
  {
    id: "3",
    icon: Gauge,
    title: "Optimized for real performance",
    content:
      "Minimal runtime footprint. No heavy dependencies. We squeeze out every millisecond — because users deserve speed.",
  },
  {
    id: "4",
    icon: HandHelping,
    title: "Production-ready accessibility",
    content:
      "Accessible by default. Tested with screen readers and strict contrast rules. Inclusivity is not optional here.",
  },
]

   export  const AccordionUsage=()=>{
    return(
      <Accordion className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id}>
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    </AccordionTrigger>
    <AccordionContent >
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
    </Accordion>
     )
     }
    `
const multipleCopy=`
  import { Accordion,
   AccordionContent, 
   AccordionItem, 
   AccordionTrigger } from "must-ui/accordion"

   import { Code2,
   Gauge,
   HandHelping,
  Palette, } from "lucide-react"
  
  const items = [
  {
    id: "1",
    icon: Code2,
    title: "Developer-first design",
    content:
      "MustUI is built to ship fast. Composable architecture, predictable component APIs, and examples that actually make sense.",
  },
  {
    id: "2",
    icon: Palette,
    title: "Modern styling freedom",
    content:
      "Tailwind? Yes. Custom CSS? Yes. Theme tokens and dark mode? Already included. No lock-in, no drama.",
  },
  {
    id: "3",
    icon: Gauge,
    title: "Optimized for real performance",
    content:
      "Minimal runtime footprint. No heavy dependencies. We squeeze out every millisecond — because users deserve speed.",
  },
  {
    id: "4",
    icon: HandHelping,
    title: "Production-ready accessibility",
    content:
      "Accessible by default. Tested with screen readers and strict contrast rules. Inclusivity is not optional here.",
  },
]

   export  const AccordionUsage=()=>{
    return(
      <Accordion multiple className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id}>
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    </AccordionTrigger>
    <AccordionContent >
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
    </Accordion>
     )
     }
    `


const AccordionPage=()=>{
 const[usage,setUsage]=useState<'preview' | 'code'>("preview")
 const[multiple,setMultiple]=useState<'preview' | 'code'>("preview")
 const [onCopyUsage,setCopyUsage]=useState(false)
 const [onCopyMultiple,setCopyMultiple]=useState(false)
    
 const copyUsage=()=>{
  navigator.clipboard.writeText(usageCopy)
  setCopyUsage(true)
  setTimeout(()=>{
    setCopyUsage(false)
  },5000)
 }

 const copyMultipe=()=>{
  navigator.clipboard.writeText(multipleCopy)
   setCopyMultiple(true)
  setTimeout(()=>{
    setCopyMultiple(false)
  },5000)
 }
   
     return(
        <div className=" min-h-screen ">
  
         <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">

        <span className="m-2" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
       Accordions
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
       A collection of unique accordion components built with React and Tailwind CSS, designed for modern projects.
        </p>
         <Button className="" onClick={() =>
      window.open('https://github.com/ilaydaufelek/MustUI', '_blank', 'noopener,noreferrer')
  } > Got to GitHub</Button>
       </div>
     
      <div className="  min-h-screen flex  justify-center  mt-4 md:mt-8 ">
       <div  className="h-full max-w-[1000px]  w-full  grid grid-cols-1  gap-3 p-6" >
        <p className="text-2xl font-semibold" >Installation</p>
        <div className="border border-zinc-600/15 rounded-md p-3 " >
        <Installation/>
     </div>

      <div className="mt-3 md:mt-6 ">
      <p className="text-2xl font-semibold" >Usage</p>
       </div>
      <div className="space-x-3 mt-1 " >
      <button onClick={()=>setUsage('preview')} className={`font-semibold  ${usage==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setUsage('code')}className={`font-semibold  ${usage==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
   <div className="relative" >
  <div className="border  border-zinc-600/15 rounded-md flex items-center justify-center h-[360px] overflow-hidden" >
       {usage==='preview'&& (
        <Accordion  className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id} className="">
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    </AccordionTrigger>
    <AccordionContent >
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
       )}
 
       {usage==='code' && (
   <div className=" h-full overflow-y-auto no-scrollbar "  >
    <button  onClick={copyUsage} className="absolute right-0 top-0 m-2" >
    {onCopyUsage ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
    <CodeBlock className="h-full" >
    {`
  import { Accordion,
   AccordionContent, 
   AccordionItem, 
   AccordionTrigger } from "must-ui/accordion"

   import { Code2,
   Gauge,
   HandHelping,
  Palette, } from "lucide-react"
  
  const items = [
  {
    id: "1",
    icon: Code2,
    title: "Developer-first design",
    content:
      "MustUI is built to ship fast. Composable architecture, predictable component APIs, and examples that actually make sense.",
  },
  {
    id: "2",
    icon: Palette,
    title: "Modern styling freedom",
    content:
      "Tailwind? Yes. Custom CSS? Yes. Theme tokens and dark mode? Already included. No lock-in, no drama.",
  },
  {
    id: "3",
    icon: Gauge,
    title: "Optimized for real performance",
    content:
      "Minimal runtime footprint. No heavy dependencies. We squeeze out every millisecond — because users deserve speed.",
  },
  {
    id: "4",
    icon: HandHelping,
    title: "Production-ready accessibility",
    content:
      "Accessible by default. Tested with screen readers and strict contrast rules. Inclusivity is not optional here.",
  },
]

   export  const AccordionUsage=()=>{
    return(
      <Accordion className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id}>
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    </AccordionTrigger>
    <AccordionContent >
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
    </Accordion>
     )
     }
          `}
        </CodeBlock>
       </div>
       ) }

     </div>
    <div className="mt-3 md:mt-6 ">
      <p className="text-2xl font-semibold" >Multiple Accordion</p>
      </div>
      <div className="space-x-3 mt-4 mb-3 " >
      <button onClick={()=>setMultiple('preview')} className={`font-semibold  ${multiple==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setMultiple('code')}className={`font-semibold  ${multiple==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
    <div className="relative" >
  <div className=" border border-zinc-600/15 rounded-md flex items-center justify-center h-[360px] overflow-hidden " >
  {multiple==='preview'&& (
        <Accordion multiple  className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id} className="">
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    </AccordionTrigger>
    <AccordionContent >
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
       )}
 
    {multiple==='code' && (
   <div className=" h-full overflow-y-auto no-scrollbar "  >
    <button  onClick={copyMultipe} className="absolute right-0 top-0 m-2" >
    {onCopyMultiple ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
    <CodeBlock className="h-full" >
          {`
  import { Accordion,
   AccordionContent, 
   AccordionItem, 
   AccordionTrigger } from "must-ui/accordion"

   import { Code2,
   Gauge,
   HandHelping,
  Palette, } from "lucide-react"
  
  const items = [
  {
    id: "1",
    icon: Code2,
    title: "Developer-first design",
    content:
      "MustUI is built to ship fast. Composable architecture, predictable component APIs, and examples that actually make sense.",
  },
  {
    id: "2",
    icon: Palette,
    title: "Modern styling freedom",
    content:
      "Tailwind? Yes. Custom CSS? Yes. Theme tokens and dark mode? Already included. No lock-in, no drama.",
  },
  {
    id: "3",
    icon: Gauge,
    title: "Optimized for real performance",
    content:
      "Minimal runtime footprint. No heavy dependencies. We squeeze out every millisecond — because users deserve speed.",
  },
  {
    id: "4",
    icon: HandHelping,
    title: "Production-ready accessibility",
    content:
      "Accessible by default. Tested with screen readers and strict contrast rules. Inclusivity is not optional here.",
  },
]

   export  const AccordionUsage=()=>{
    return(
      <Accordion multiple className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id}>
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    </AccordionTrigger>
    <AccordionContent >
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
    </Accordion>
     )
     }
          `}
        </CodeBlock>
       </div>
       ) }

     </div>
    </div>

   </div>
   </div>
       
     </div>
     
   
    </div>
    )
}

export default AccordionPage