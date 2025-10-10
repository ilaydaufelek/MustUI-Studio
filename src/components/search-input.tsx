import { Command } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const SearchInput=()=>{
        const [isValue, setIsValue]=useState("");
    const [isOpen, setIsOpen]=useState(false);
  
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
    return(
         <div className="max-w-[1400px] w-full h-12 mt-[80px] p-6  " >
      <div className=" relative w-full sm:w-72 md:w-72 sm:ml-auto text-wrap " >
      <input 
        value={isValue} 
        ref={inputRef}
        onChange={(e)=>{
            setIsValue(e.target.value)
            if(e.target.value === ""){
                setIsOpen(false)
            }
        }}
       className="border border-zinc-900 h-11 w-full md:w-72 outline-none text-xs pl-2  rounded-lg  pr-8  "
        type="text" 
       placeholder="search" />
       
      
        <button onClick={()=>{
             setIsOpen(true)
             inputRef?.current?.focus()
        }} className=" absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500  p-2  text-xs" > 
           {(!isValue && !isOpen) &&(
         <kbd 
        className="pointer-events-none inline-flex  h-5 select-none items-center gap-1 rounded border bg-muted   px-1.5 font-mono text-[10px] font-medium text-muted-foreground ml-auto">
         <span className="text-xs" ><Command className="w-3 h-3 " /></span>K
        </kbd>  
           )}
        </button>
      
      {isValue &&<button 
      onClick={()=>{
        setIsValue('');
        setIsOpen(false)
      }}
       className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500  text-xs " >X</button>}
      </div>
      </div>
    )
}