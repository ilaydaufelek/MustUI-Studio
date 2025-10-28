'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { ModalProvider } from "@/provider/modal-provider"
import { Github } from "lucide-react"
import { Button } from "must-ui"

const AccordionPage=()=>{
    return(
        <div className=" relative min-h-screen ">
   <div className="absolute inset-0 z-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-black dark:bg-[radial-gradient(#19191c_1px,transparent_1px)]  "></div>
   <div className="relative z-10" >
       <header className="   w-full  text-black dark:text-white h-[60px] flex items-center  space-x-2 md:px-12 p-2
          ">
        <a   href="https://github.com/ilaydaufelek/MustUI" target="_blank" rel="noopener noreferrer"  className="rounded-full bg-zinc-900  hover:bg-zinc-700 transition-all  w-8 h-8 flex items-center justify-center  ml-auto  cursor-pointer  text-white " >
         <Github className="w-4 h-4  " /></a>
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
      <div className="h-full max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6  ">
     

          <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[200px]  transition-all flex items-center justify-center  " >
          
          </div>
          <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[200px]  transition-all flex items-center justify-center  " >
         
          </div>
        <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] transition-all flex items-center justify-center" >
       
        </div>
       
       
         
          
      
      </div>
     </div>
   </div>
      <ModalProvider/>
   
    </div>
    )
}

export default AccordionPage