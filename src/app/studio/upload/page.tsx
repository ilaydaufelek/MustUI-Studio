'use client'
import CodeBlock from "@/components/code-block"
import { Installation } from "@/components/installation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Upload } from "must-ui/upload"
import {  Copy, CopyCheck, } from "lucide-react"
import { Button } from "must-ui/button"
import { useState } from "react"


const textUsage=`
import { Upload } from "must-ui/upload"   
 
export const UploadUsage=()=>{
const[file,setFile]=useState<File[] | null>(null)
 return(
 <Upload value={file} onChange={setFile} />
 )
 }
`

const textVariants=`

import { Upload } from "must-ui/upload"  
 
export const UploadUsage=()=>{
const[file,setFile]=useState<File[] | null>(null)
 return(
 <Upload multiple value={file} onChange={setFile} />
 )
 }
`
const UploadPage=()=>{
  const[file,setFile]=useState<File[] | null>(null)
    const[file1,setFile1]=useState<File[] | null>(null)

const[usage,setUsage]=useState<'preview' | 'code'>("preview")
 const[copyUsage,setCopyUsage]=useState(false)

 const[variants,setVariants]=useState<'preview' | 'code'>("preview")
 const[copyVariants,setCopyVariants]=useState(false)

 const onCopyUsage=()=>{
  navigator.clipboard.writeText(textUsage)
  setCopyUsage(true)
  setTimeout(()=>{
    setCopyUsage(false)
  },5000)
}


const onCopyVariants=()=>{
  navigator.clipboard.writeText(textVariants)
  setCopyVariants(true)
  setTimeout(()=>{
    setCopyVariants(false)
  },5000)
}
 return(
     <div className="min-h-screen" >
       <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
        <span className="m-2" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
        Upload
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
       A collection of unique upload components built with React and Tailwind CSS, designed for modern projects.
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
     <div className="mt-3 md:mt-6 ">
    <p className="text-2xl font-semibold" >Usage</p>
    </div>
  <div className="space-x-3 mt-1 " >
  <button onClick={()=>setUsage('preview')} className={`font-semibold  ${usage==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
  <button onClick={()=>setUsage('code')}className={`font-semibold  ${usage==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
     <div className="relative" >
    <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden" >
   {usage==="preview" && (
    <div className="h-full flex items-center justify-center overflow-y-auto no-scrollbar p-3 " >
  <Upload value={file} onChange={setFile} />
    </div>
   )}
   {usage==='code' &&(
    <div className=" h-full overflow-y-auto no-scrollbar ">
      <button className="absolute right-0 top-0 m-2 "  onClick={onCopyUsage} >
       {copyUsage ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
      <CodeBlock>
      {`
import { Upload } from "must-ui/upload"  
 
export const UploadUsage=()=>{
const[file,setFile]=useState<File[] | null>(null)
 return(
 <Upload value={file} onChange={setFile} />
 )
 }
`}
      </CodeBlock>
    </div>
   )}
      </div>
     </div>
          <div className="mt-3 md:mt-6 ">
    <p className="text-2xl font-semibold" >Multiple Upload</p>
    </div> 
  <div className="space-x-3 mt-1 " >
  <button onClick={()=>setVariants('preview')} className={`font-semibold  ${variants==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
  <button onClick={()=>setVariants('code')}className={`font-semibold  ${variants==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
     <div className="relative" >
    <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden" >
   {variants==="preview" && (
  <div className="h-full flex items-center justify-center overflow-y-auto no-scrollbar p-3 " >
  <Upload multiple value={file1} onChange={setFile1} />
    </div>
   )}
   {variants==='code' &&(
    <div className=" h-full overflow-y-auto no-scrollbar ">
      <button className="absolute right-0 top-0 m-2 "  onClick={onCopyVariants} >
       {copyVariants ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
      <CodeBlock>
      {`
import { Upload } from "must-ui/upload"  
 
export const UploadUsage=()=>{
const[file,setFile]=useState<File[] | null>(null)
 return(
 <Upload multiple value={file} onChange={setFile} />
 )
 }
`}
      </CodeBlock>
    </div>
   )}
      </div>
     </div>
   
        </div>
       </div>
  </div>
 )
}

export default UploadPage