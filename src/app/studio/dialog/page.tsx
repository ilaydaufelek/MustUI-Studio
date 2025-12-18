"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { useModal } from "@/hooks/use-modal-store"
import { useRouter } from "next/navigation"
import { Dialog, DialogCancel, DialogContent, DialogDescription, DialogFooter, DialogSubmit, DialogTitle, DialogTrigger } from "@/library/components/dialog"
import { ModalProvider } from "@/provider/modal-provider"
import { CircleAlertIcon, Code, Github } from "lucide-react"
import { Button } from "must-ui/button"

const DialogPage=()=>{
    const{onOpen}=useModal()
    const router=useRouter()
    return(
        <div className=" min-h-screen ">
      
      
         <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
       <p onClick={()=>router.push('')} className="text-sm font-semibold underline cursor-pointer  " >Installation</p>
        <span className="m-2" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
      Dialog
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
       A collection of unique accordion components built with React and Tailwind CSS, designed for modern projects.
        </p>
         <Button className="" onClick={() =>
      window.open('https://github.com/ilaydaufelek/MustUI', '_blank', 'noopener,noreferrer')
     }> Got to GitHub</Button>
       </div>
     
      <div className="  min-h-screen flex  justify-center  mt-4 md:mt-8 ">
      <div className="h-full max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 p-6  ">
     

      <div className=" relative group border border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[100px]  transition-all flex items-center justify-center ">
      <div className="absolute top-0 right-0 m-2  opacity-0 group-hover:opacity-100 transition-opacity  text-zinc-800 dark:text-white px-2  rounded-md cursor-pointer"><Code className="w-4 h-4" /></div>
      <Dialog>
      <DialogTrigger>
      Open Dialog
      </DialogTrigger>
      <DialogContent >
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
      Take a moment to review the details provided to ensure you understand the implications.
      </DialogDescription>
      <DialogFooter>
      <DialogCancel>Cancel</DialogCancel>
      <DialogSubmit>Submit</DialogSubmit>
      </DialogFooter>
      </DialogContent>
      </Dialog>
      </div>

      <div className=" relative border group border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[100px]  transition-all flex items-center justify-center  " >
       <div className="absolute top-0 right-0 m-2  opacity-0 group-hover:opacity-100 transition-opacity  text-zinc-800 dark:text-white px-2  rounded-md cursor-pointer"><Code className="w-4 h-4" /></div> 
       <Dialog>
      <DialogTrigger>
      Open Dialog with icon
      </DialogTrigger>
      <DialogContent >
        <div className="flex flex-col gap-2 max-sm:items-center  sm:flex-row sm:gap-4">
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-full border" >
         
            <CircleAlertIcon className="opacity-80" size={16} />
          </div>
      <DialogTitle>Are you sure?</DialogTitle>
      </div>
      <DialogDescription>
      Take a moment to review the details provided to ensure you understand the implications.
      </DialogDescription>
      <DialogFooter>
      <DialogCancel>Cancel</DialogCancel>
      <DialogSubmit>Submit</DialogSubmit>
      </DialogFooter>
      </DialogContent>
      </Dialog>

      </div>
        <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[100px] transition-all flex items-center justify-center" >
       
        </div>
       
       
         
          
      
      </div>
   </div>
      <ModalProvider/>
   
    </div>
    )
}

export default DialogPage