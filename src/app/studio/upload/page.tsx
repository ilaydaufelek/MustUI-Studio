'use client'
import CodeBlock from "@/components/code-block"
import { Installation } from "@/components/installation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Textarea } from "@/library/components/textarea"
import { Upload } from "@/library/components/upload"
import {  Copy, CopyCheck, } from "lucide-react"
import { Button } from "must-ui/button"
import { useState } from "react"



const UploadPage=()=>{
const [file, setFile] = useState< File[] | null>(null)
 return(
     <div className="min-h-screen" >
       <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
        <span className="m-2" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
        Textarea
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
       A collection of unique accordion components built with React and Tailwind CSS, designed for modern projects.
        </p>
         <Button className="" onClick={() =>
      window.open('https://github.com/ilaydaufelek/MustUI', '_blank', 'noopener,noreferrer')
  } > Got to GitHub</Button>
       </div>

       <div  className="  min-h-screen flex  justify-center  mt-4 md:mt-8 " >
      <div  className="h-full max-w-[1000px]  w-full  grid grid-cols-1  gap-3 p-6" >
     <p className="text-2xl font-semibold" >Installation</p>
      <div className="border border-zinc-600/15 rounded-md p-3 " >
    <Installation/>
    </div>
    <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden" >
    <div className="flex items-center justify-center w-full h-full " >
      <Upload multiple  value={file} onChange={setFile} />
    </div>

    </div>
      </div>
     </div>
        
      </div>
  
   
 
   
 )
}

export default UploadPage