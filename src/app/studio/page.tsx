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
    <div className="dark:bg-black bg-white min-h-screen">
     <header className="fixed top-0 left-0 w-full  text-black dark:text-white h-[60px] flex items-center  space-x-2 md:px-12 p-2
        font-bold text-2xl z-50   backdrop-blur-xs  ">
        <span className="cursor-pointer">MustUI Studio</span>
        <a   href="https://github.com/ilaydaufelek/MustUI" target="_blank" rel="noopener noreferrer"  className="rounded-full bg-zinc-900  hover:bg-zinc-700 transition-all  w-8 h-8 flex items-center justify-center  ml-auto  cursor-pointer  text-white " >
         <Github className="w-4 h-4  " /></a>
        <span className="m-2" ><ThemeToggle/></span>
      </header>

      <div className="flex items-center justify-center" >
      <SearchInput/>
      </div>

      <div className="min-h-screen flex  justify-center  mt-4 md:mt-8 ">
        <div className="h-full max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 ">
          
        <div className="relative border  border-zinc-600 rounded-md w-full h-[200px]  transition-all flex items-center justify-center " >
          <div onClick={()=>onOpen('buttonModal')}  className="absolute top-0 right-0 m-2 bg-zinc-700 dark:bg-white dark:text-zinc-800 text-white px-2  rounded-md cursor-pointer"><Code2 className="w-5 h-5" /></div>
            <Button 
            size="md"
            variant="primary">button</Button>
          </div>

          <div className=" relative border border-zinc-600 rounded-md w-full h-[200px]  transition-all flex items-center justify-center " >
          <div onClick={()=>onOpen('inputModal')}  className="absolute top-0 right-0 m-2 bg-zinc-700 dark:bg-white dark:text-zinc-800 text-white px-2  rounded-md cursor-pointer"><Code2 className="w-5 h-5" /></div>
          <Input 
          variant="filled"
          size="lg"
          />
          </div>
          <div className=" relative border border-zinc-600 rounded-md w-full h-[200px]  transition-all flex items-center justify-center " >
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
        <div className="border border-zinc-600 rounded-md w-full h-[200px] transition-all flex items-center justify-center " >
       <DropdownMenu >
        <DropdownMenuTrigger className="font-semibold text-sm ">
        DropdownMenu
        <ChevronDown className="w-4 h-4 ml-2 " />
        </DropdownMenuTrigger>
        <DropdownMenuContent >
         <DropdownMenuItem  >Option 1</DropdownMenuItem>
         <DropdownMenuItem  >Option 2</DropdownMenuItem>
         <DropdownMenuItem  >Option 3</DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>
        </div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] transition-all flex items-center justify-center " >5kutu</div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] transition-all flex items-center justify-center " >6kutu</div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] transition-all flex items-center justify-center " > 7 kutu</div>
          
      </div>
      </div>
      <ModalProvider/>
    </div>
  );
};

export default StudioPage;
