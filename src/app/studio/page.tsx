'use client'


import { ThemeToggle } from "@/components/theme-toggle";
import {Input,Button} from 'must-ui'
import { ChevronDown, Code2, Github } from "lucide-react";
import { ModalProvider } from "@/provider/modal-provider";
import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogCancel, DialogContent, DialogDescription, DialogFooter, DialogSubmit, DialogTitle, DialogTrigger } from "must-ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/library/components/dropdown";
import { Accordion } from "@/library/components/accordion";
import { useRouter } from "next/navigation";




const StudioPage = () => {
  
  const{onOpen}= useModal()
  const router=useRouter()

  return (
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
        MustUI Studio
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
          A modern, open-source UI toolkit for building sleek and fast applications.
        </p>
         <Button className="" onClick={() =>
      window.open('https://github.com/ilaydaufelek/MustUI', '_blank', 'noopener,noreferrer')
  } > Got to GitHub</Button>
       </div>
     
      <div className="  min-h-screen flex  justify-center  mt-4 md:mt-8 ">
      <div className="h-full max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6  ">
      <div className=" text-center space-y-3" >
       <div onClick={()=>router.push('/studio/accordion')} className="border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] flex items-center justify-center cursor-pointer  transition-all" >
        <img className="w-[150px]" src="accordion.png" alt="" />
       </div>
      <p onClick={()=>router.push('/studio/accordion')} className="text-sm font-semibold hover:underline cursor-pointer " >Accordion</p>
       </div>
       
       <div className=" text-center space-y-3" >
       <div onClick={()=>router.push('/studio/button')} className="border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] flex items-center justify-center cursor-pointer  transition-all" >
        <img className="w-[100px]  " src="button.png" alt="" />
       </div>
      <p onClick={()=>router.push('/studio/button')} className="text-sm font-semibold hover:underline cursor-pointer " >Button</p>
       </div>

         <div className=" text-center space-y-3" >
       <div onClick={()=>router.push('/studio/dialog')} className="border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] flex items-center justify-center cursor-pointer  transition-all" >
      <img className="w-[150px]  " src="dialog.png" alt="" />
       </div>
      <p onClick={()=>router.push('/studio/dialog')} className="text-sm font-semibold hover:underline cursor-pointer " >Dialog</p>
       </div>

        <div className=" text-center space-y-3" >
       <div onClick={()=>router.push('/studio/dropdown')} className="border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] flex items-center justify-center cursor-pointer  transition-all" >
        <img className="w-[150px]  " src="dropdown.png" alt="" />
       </div>
      <p onClick={()=>router.push('/studio/dropdown')} className="text-sm font-semibold hover:underline cursor-pointer " >Dropdown</p>
       </div>



       <div className=" text-center space-y-3" >
       <div onClick={()=>router.push('/studio/input')} className="border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] flex items-center justify-center cursor-pointer  transition-all" >
        <img className="w-[150px] h-[27px] " src="input.png" alt="" />
       </div>
      <p onClick={()=>router.push('/studio/input')} className="text-sm font-semibold hover:underline cursor-pointer " >Input</p>
       </div>
      
    
        <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] transition-all flex items-center justify-center " >
         <Accordion/> </div>
          <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] transition-all flex items-center justify-center " >6kutu</div>
          <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] transition-all flex items-center justify-center  " > 7 kutu</div>
          
      </div>
      </div>
     </div>
  
      <ModalProvider/>
    </div>
  );
};

export default StudioPage;
