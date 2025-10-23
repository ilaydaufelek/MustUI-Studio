'use client'


import { ThemeToggle } from "@/components/theme-toggle";
import {Input,Button} from 'must-ui'
import { ChevronDown, Code2, Github } from "lucide-react";
import { SearchInput } from "@/components/search-input";
import { ModalProvider } from "@/provider/modal-provider";
import { useModal } from "@/hooks/use-modal-store";
import { Dialog, DialogCancel, DialogContent, DialogDescription, DialogFooter, DialogSubmit, DialogTitle, DialogTrigger } from "must-ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/library/components/dropdown";




const StudioPage = () => {
  
  const{onOpen}= useModal()

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
        <div className="  text-5xl md:text-7xl  font-bold   " >
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
          
        <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[200px]  transition-all flex items-center justify-center   " >
          <div onClick={()=>onOpen('buttonModal')}  className="absolute top-0 right-0 m-2 bg-zinc-700 dark:bg-white dark:text-zinc-800 text-white px-2  rounded-md cursor-pointer"><Code2 className="w-5 h-5" /></div>
            <Button 
            size="md"
            variant="primary">button</Button>
          </div>

          <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[200px]  transition-all flex items-center justify-center  " >
          <div onClick={()=>onOpen('inputModal')}  className="absolute top-0 right-0 m-2 bg-zinc-700 dark:bg-white dark:text-zinc-800 text-white px-2  rounded-md cursor-pointer"><Code2 className="w-5 h-5" /></div>
          <Input 
          variant="filled"
          size="lg"
          />
          </div>
          <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md w-full h-[200px]  transition-all flex items-center justify-center  " >
          <div onClick={()=>onOpen('dialogModal')}  className="absolute top-0 right-0 m-2 bg-zinc-700 dark:bg-white dark:text-zinc-800 text-white px-2  rounded-md cursor-pointer"><Code2 className="w-5 h-5" /></div>
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
        <div className=" relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] transition-all flex items-center justify-center" >
        <div onClick={()=>onOpen('dropdownMenuModal')}  className="absolute top-0 right-0 m-2 bg-zinc-700 dark:bg-white dark:text-zinc-800 text-white px-2  rounded-md cursor-pointer"><Code2 className="w-5 h-5" /></div>
       <DropdownMenu >
        <DropdownMenuTrigger className="font-semibold text-sm break-words  ">
         DropdownMenu
        <ChevronDown className="w-4 h-4 ml-2  " />
        </DropdownMenuTrigger>
        <DropdownMenuContent >
         <DropdownMenuItem  >Option 1</DropdownMenuItem>
         <DropdownMenuItem  >Option 2</DropdownMenuItem>
         <DropdownMenuItem  >Option 3</DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
        </div>
          <div className="relative border border-zinc-300 dark:border-zinc-800 rounded-md  w-full h-[200px] transition-all flex items-center justify-center " >5kutu</div>
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
