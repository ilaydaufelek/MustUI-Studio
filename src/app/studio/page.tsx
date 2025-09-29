'use client'

import { useMobile } from "@/hooks/use-mobil";
import { Command, Github } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const StudioPage = () => {
    const [isValue, setIsValue]=useState("");
    const [isOpen, setIsOpen]=useState(false);
    const mobil=useMobile()
     const inputRef=useRef<HTMLInputElement>(null)
    useEffect(()=>{
        const down=(e:KeyboardEvent)=>{
            if(e.key==="k" && (e.metaKey || e.ctrlKey)){
                e.preventDefault();
                setIsOpen((open)=>!open)
                inputRef?.current?.focus();
            }
        }
        window.addEventListener('keydown',down)
        return ()=>window.removeEventListener('keydown',down)
    },[])

  return (
    <div className="bg-black min-h-screen">
      
      <div className="fixed top-0 left-0 w-full  h-[60px] flex items-center justify-between space-x-2 md:px-12 p-2
        font-bold text-2xl z-50 bg-transparent/5  backdrop-blur-xs combined ">
        <span className="cursor-pointer">MustUI Studio</span>
        <a   href="https://github.com/ilaydaufelek/MustUI" target="_blank" rel="noopener noreferrer"  className="rounded-full bg-zinc-900  hover:bg-zinc-700 transition-all  w-8 h-8 flex items-center justify-center cursor-pointer  " >
         <Github className="w-4 h-4  " /></a>
      </div>

       
      <div className="max-w-[1400px] w-full  flex items-center mx-auto  ">
        
       <div className="flex items-center mt-[80px] md:ml-auto p-2 relative  " >
       {(!mobil || (mobil && isOpen)) && (
         <input 
        value={isValue}
        ref={inputRef}
        onChange={(e)=>{
            setIsValue(e.target.value)
            if(e.target.value === ""){
                setIsOpen(false)
            }
        }}
       className="border border-zinc-900 h-11 w-72 outline-none text-xs pl-2  rounded-lg "
        type="text" 
       placeholder="search" />
       )}
       {!isValue && (
        <button onClick={()=>{
             setIsOpen(true)
             inputRef?.current?.focus()
        }} className=" absolute md:right-4 top-1/2 -translate-y-1/2 text-zinc-500    text-xs" > 
           {(!isValue && !isOpen) &&(
         <kbd 
        className="pointer-events-none inline-flex  h-5 select-none items-center gap-1 rounded border bg-muted  px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
         <span className="text-xs" ><Command className="w-3 h-3 " /></span>K
        </kbd>  
           )}
        </button>
       )}     
      {isValue &&<button 
      onClick={()=>{
        setIsValue('');
        setIsOpen(false)
      }}
       className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500   text-xs " >X</button>}
       </div>
      </div>

      <div className="min-h-screen flex  justify-center  mt-4 md:mt-8 ">
        <div className="h-full max-w-[1400px] w-full border border-zinc-700">
          
          <div className="h-[300px] w-full flex flex-col md:flex-row items-center">
            <div className="flex flex-1 items-center justify-center w-full h-full hover:bg-zinc-950 transition-all cursor-pointer">
              button
            </div>

            <div className="border-zinc-600 border-b w-full md:border-b-0 md:border-l md:w-[1px] md:h-full border-dotted" />

            <div className="flex flex-1 items-center justify-center w-full h-full hover:bg-zinc-950 transition-all cursor-pointer">
              input
            </div>
          </div>

          
          <div className="border-zinc-600 border-b w-full border-dotted " />

          
          <div className="h-[300px] w-full flex flex-col md:flex-row items-center">
            <div className="flex flex-1 items-center justify-center w-full h-full hover:bg-zinc-950 transition-all cursor-pointer">
              button
            </div>

            <div className="border-zinc-600 border-b w-full md:border-b-0 md:border-l md:w-[1px] md:h-full border-dotted" />

            <div className="flex flex-1 items-center justify-center w-full h-full hover:bg-zinc-950 transition-all cursor-pointer">
              input
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioPage;
