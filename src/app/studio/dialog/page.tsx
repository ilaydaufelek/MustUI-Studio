"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Dialog, DialogCancel, DialogContent, DialogDescription, DialogFooter, DialogSubmit, DialogTitle, DialogTrigger } from "must-ui/dialog"
import { ModalProvider } from "@/provider/modal-provider"
import { CircleAlertIcon, Code, Copy, CopyCheck} from "lucide-react"
import { Button } from "must-ui/button"
import { Installation } from "@/components/installation"
import { useState } from "react"
import CodeBlock from "@/components/code-block"


const usageCopy=`
import { Dialog,
DialogCancel,
DialogContent, 
DialogDescription, 
DialogFooter, 
DialogSubmit, 
DialogTitle, 
DialogTrigger } from "must-ui/dialog"

 export const DialogUsage=()=>{
 return(
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
)}
`

const copyDialogI= `
import { Dialog,
DialogCancel,
DialogContent, 
DialogDescription, 
DialogFooter, 
DialogSubmit, 
DialogTitle, 
DialogTrigger } from "must-ui/dialog"

import { CircleAlertIcon} from "lucide-react"

export const DialogUsage=()=>{
 return(
<Dialog>
<DialogTrigger> Open Dialog with icon </DialogTrigger>

<DialogContent>
<div className="flex flex-col gap-2 max-sm:items-center  sm:flex-row sm:gap-4">
<div className="flex size-9 shrink-0 items-center justify-center rounded-full border" >
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
)}` 
        

const DialogPage=()=>{
  const[usage,setUsage]=useState<'preview' | 'code'>("preview")
  const[dialogI,setDialogI]=useState<'preview' | 'code'>("preview")
   const [onCopyUsage,setCopyUsage]=useState(false)
    const [onCopyDialogI,setCopyDialogI]=useState(false)
   const copyUsage=()=>{
  navigator.clipboard.writeText(usageCopy)
 setCopyUsage(true)
  setTimeout(()=>{
  setCopyUsage(false)
  },5000)
 }

    const copyDialogIcon=()=>{
  navigator.clipboard.writeText(copyDialogI)
   setCopyDialogI(true)
  setTimeout(()=>{
  setCopyDialogI(false) 
  },5000)
 }

    return(
        <div className=" min-h-screen ">
      
      
         <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2"> 
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
      <div className="h-full max-w-[1000px]  w-full  grid grid-cols-1  gap-3 p-6  ">
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
       <div className="border  border-zinc-600/15 rounded-md flex items-center justify-center h-[360px] overflow-hidden" >
       {usage==='preview' &&(
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
       )}
      {usage==='code' && (
     <div className=" h-full overflow-y-auto no-scrollbar" >
       <button  onClick={copyUsage} className="absolute right-0 top-0 m-2" >
    {onCopyUsage ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
       <CodeBlock className="h-full" >
       {`
import { Dialog,
DialogCancel,
DialogContent, 
DialogDescription, 
DialogFooter, 
DialogSubmit, 
DialogTitle, 
DialogTrigger } from "must-ui/dialog"

 export const DialogUsage=()=>{
 return(
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
)}`}
  </CodeBlock>
 </div>)}
      
     </div> 
    <div className="mt-3 md:mt-6 ">
  <p className="text-2xl font-semibold" >Dialog with Icon</p>
  </div> 
    <div className="space-x-3 mt-1 " >
      <button onClick={()=>setDialogI('preview')} className={`font-semibold  ${dialogI==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setDialogI('code')}className={`font-semibold  ${dialogI==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
      <div className="relative" >
       <div className="border  border-zinc-600/15 rounded-md flex items-center justify-center h-[360px] overflow-hidden mt-3 mb-4 " >
       {dialogI==='preview' && (
         <Dialog>
      <DialogTrigger>
      Open Dialog with icon
      </DialogTrigger>
      <DialogContent >
        <div className="flex flex-col gap-2 max-sm:items-center  sm:flex-row sm:gap-4">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full border" >
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

       )}
       {dialogI==='code' &&(
        <div className="h-full overflow-y-auto no-scrollbar">
      <button  onClick={copyDialogIcon} className="absolute right-0 top-0 m-2" >
    {onCopyDialogI? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
          <CodeBlock className="h-full" >
         {`
import { Dialog,
DialogCancel,
DialogContent, 
DialogDescription, 
DialogFooter, 
DialogSubmit, 
DialogTitle, 
DialogTrigger } from "must-ui/dialog"

import { CircleAlertIcon} from "lucide-react"

export const DialogUsage=()=>{
 return(
<Dialog>
<DialogTrigger> Open Dialog with icon </DialogTrigger>

<DialogContent>
<div className="flex flex-col gap-2 max-sm:items-center  sm:flex-row sm:gap-4">
<div className="flex size-9 shrink-0 items-center justify-center rounded-full border" >
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
)}         
`}
          </CodeBlock>
        </div>
       )}
        </div>
      </div>

    </div> 
         
          
      
      </div>
   </div>
    </div>
    )
}

export default DialogPage