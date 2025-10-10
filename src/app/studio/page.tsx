'use client'


import { ThemeToggle } from "@/components/theme-toggle";

import {Button} from 'must-ui-v2'

import { Github } from "lucide-react";
import { SearchInput } from "@/components/search-input";


const StudioPage = () => {


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
          
        <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " >
            <Button
            variant="secondary"

            >button</Button>
          </div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " >
       <Button 
       size="md" >merhaba</Button>
          </div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " >
         3.kutu
          </div>
        <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " >
        4.kutu
        </div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " >5kutu</div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " >6kutu</div>
          <div className="border border-zinc-600 rounded-md w-full h-[200px] dark:hover:bg-zinc-900  hover:bg-zinc-100/90 transition-all flex items-center justify-center " > 7 kutu</div>
          
      </div>
      </div>
    </div>
  );
};

export default StudioPage;
