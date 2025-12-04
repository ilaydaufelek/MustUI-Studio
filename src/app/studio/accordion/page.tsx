'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { Accordion, AccordionContent, AccordionItem,  AccordionTrigger } from "must-ui"
import { ModalProvider } from "@/provider/modal-provider"
import {  Code2,  Gauge, HandHelping, Palette, } from "lucide-react"
import { Button } from "must-ui"
import { useRouter } from "next/navigation"


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



const AccordionPage=()=>{
 const router=useRouter()
    return(
        <div className=" min-h-screen ">
  
         <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
       <p onClick={()=>router.push('')} className="text-sm font-semibold underline cursor-pointer  " >Installation</p>
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
      <div className="h-full max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 p-6 space-y-4  ">
     

  <div className=" space-y-2" >
    <p className="text-xl md:text-2xl font-bold" >Basic Accordion</p>
   <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full transition-all">
  <Accordion className="w-full">
    {items.map((item) => (
    <AccordionItem value={item.id} key={item.id} className="">
    <AccordionTrigger>
    {item.title}
    </AccordionTrigger>
    <AccordionContent>
    {item.content}
    </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
</div>
  </div>

<div className=" space-y-2" >
 <p className="text-xl md:text-2xl font-bold " >Accordion with Icon</p>
  <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full transition-transform duration-1000 ">
  
  <Accordion  className="w-full">
    {items.map((itemm) => (
    <AccordionItem value={itemm.id} key={itemm.id} className="">
    <AccordionTrigger>
    <span className="flex items-center gap-3">
    <itemm.icon size={16} className="shrink-0 opacity-60" aria-hidden="true" />
    <span>{itemm.title}</span>
    </span>
    
    </AccordionTrigger>
    <AccordionContent>
    {itemm.content}
    </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
  </div>
</div>

  <div className=" space-y-2" >
    <p className="text-xl md:text-2xl font-bold" >Multi Accordion</p>
   <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full transition-all">
  <Accordion multiple className="w-full">
    {items.map((item) => (
    <AccordionItem value={item.id} key={item.id} className="">
    <AccordionTrigger>
    {item.title}
    </AccordionTrigger>
    <AccordionContent>
    {item.content}
    </AccordionContent>
    </AccordionItem>
    ))}
  </Accordion>
</div>
  </div>

  <div className=" space-y-2" >
 <p className="text-xl md:text-2xl  font-bold " > Multi Accordion with Icon</p>
  <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full transition-transform duration-1000 ">
  
  <Accordion multiple className="w-full">
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
  </div>
</div>

       
       
         
          
      
      </div>
       
     </div>
      <ModalProvider/>
   
   
    </div>
    )
}

export default AccordionPage