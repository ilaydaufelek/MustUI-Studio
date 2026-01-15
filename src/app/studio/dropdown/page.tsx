"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown,  Copy, CopyCheck} from "lucide-react"
import { Button } from "must-ui/button"
import { Installation } from "@/components/installation"
import { useState } from "react"
import CodeBlock from "@/components/code-block"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "must-ui/dropdown"


const usageCopy=`
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"

export const DropdownUsage=()=>{
return(
<DropdownMenu>
<DropdownMenuTrigger>dropdown menu </DropdownMenuTrigger>
<DropdownMenuContent>
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
)}
`

const copyDropdownI= `
import { useState } from "react"
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"
import { ChevronDown} from "lucide-react"


export const DropdownUsage=()=>{
const [open, setOpen] = useState(false)
return(
<DropdownMenu open={open} onOpenChange={setOpen}>
<DropdownMenuTrigger
onClick={() => setOpen(prev => !prev)}
className="flex items-center gap-2">
  dropdown menu
<ChevronDown
 className={\`
h-4 w-4 transition-transform duration-200
\${open ? "rotate-180" : "rotate-0"}
\`}/>
    
</DropdownMenuTrigger>
<DropdownMenuContent >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem> Item2 </DropdownMenuItem>
<DropdownMenuItem> Item3 </DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
)}` 
    
const copyDropdownTopBottom= `
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"



export const DropdownUsage=()=>{
return(
 <div className="h-full flex items-center justify-center  flex-col gap-4 md:flex-row " >
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Top </DropdownMenuTrigger>
<DropdownMenuContent side="top" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Bottom </DropdownMenuTrigger>
<DropdownMenuContent side="bottom" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</div>
)}` 

const copyDropdownLeftRight= `
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"



export const DropdownUsage=()=>{
return(
 <div className="h-full flex items-center justify-center  flex-col gap-4 md:flex-row " >
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Left </DropdownMenuTrigger>
<DropdownMenuContent side="left" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Right </DropdownMenuTrigger>
<DropdownMenuContent side="right" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</div>
)}` 
    

const DropdownPage=()=>{
  const [open, setOpen] = useState(false)
  const[usage,setUsage]=useState<'preview' | 'code'>("preview")
  const[dropdownI,setDropdownI]=useState<'preview' | 'code'>("preview")
  const[dropdownTop,setDropdownTop]=useState<'preview' | 'code'>("preview")
  const[dropdownLeft,setDropdownLeft]=useState<'preview' | 'code'>("preview")

   const [onCopyUsage,setCopyUsage]=useState(false)
   const [onCopyDropdownI,setCopyDropdownI]=useState(false)
   const [onCopyDropdownTop,setCopyDropdownTop]=useState(false)
   const [onCopyDropdownLeft,setCopyDropdownLeft]=useState(false)

   const copyUsage=()=>{
  navigator.clipboard.writeText(usageCopy)
 setCopyUsage(true)
  setTimeout(()=>{
  setCopyUsage(false)
  },5000)
 }

    const copyDropdownIcon=()=>{
  navigator.clipboard.writeText(copyDropdownI)
   setCopyDropdownI(true)
  setTimeout(()=>{
  setCopyDropdownI(false) 
  },5000)
 }
    const copyDropdownTop=()=>{
  navigator.clipboard.writeText(copyDropdownTopBottom)
   setCopyDropdownTop(true)
  setTimeout(()=>{
  setCopyDropdownTop(false) 
  },5000)
 }

     const copyDropdownLeft=()=>{
  navigator.clipboard.writeText(copyDropdownLeftRight)
   setCopyDropdownLeft(true)
  setTimeout(()=>{
  setCopyDropdownLeft(false) 
  },5000)
 }
    return(
        <div className=" min-h-screen ">
      
      
         <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2"> 
        <span className="m-2" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
      Dropdown
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
       <div className="border  border-zinc-600/15 rounded-md  h-[360px] overflow-hidden" >
       {usage==='preview' &&(
    <div className="h-full flex items-center justify-center " >
<DropdownMenu>
<DropdownMenuTrigger>dropdown menu </DropdownMenuTrigger>
<DropdownMenuContent >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

  </div>
       )}
      {usage==='code' && (
     <div className=" h-full overflow-y-auto no-scrollbar" >
       <button  onClick={copyUsage} className="absolute right-0 top-0 m-2" >
    {onCopyUsage ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
       <CodeBlock className="h-full" >
       {`
import { DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"

 export const DropdownUsage=()=>{
return(
<DropdownMenu>
<DropdownMenuTrigger>dropdown menu </DropdownMenuTrigger>
<DropdownMenuContent >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
)}`}
  </CodeBlock>
 </div>)}
</div> 
    <div className="mt-3 md:mt-6 ">
  <p className="text-2xl font-semibold" >Dropdown with Icon</p>
  </div> 
    <div className="space-x-3 mt-1 " >
      <button onClick={()=>setDropdownI('preview')} className={`font-semibold  ${dropdownI==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setDropdownI('code')}className={`font-semibold  ${dropdownI==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
      <div className="relative" >
       <div className="border  border-zinc-600/15 rounded-md  h-[360px] overflow-hidden mt-3 mb-4 " >
       {dropdownI==='preview' && (
        <div className="h-full flex items-center justify-center " >
<DropdownMenu open={open} onOpenChange={setOpen}>
<DropdownMenuTrigger
onClick={() => setOpen(prev => !prev)}
className="flex items-center gap-2">
  dropdown menu
<ChevronDown
className={`
h-4 w-4 transition-transform duration-200
${open ? "rotate-180" : "rotate-0"}
`}/>
    
</DropdownMenuTrigger>
<DropdownMenuContent >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem> Item2 </DropdownMenuItem>
<DropdownMenuItem> Item3 </DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
  </div>

       )}
       {dropdownI==='code' &&(
        <div className="h-full overflow-y-auto no-scrollbar">
      <button  onClick={copyDropdownIcon} className="absolute right-0 top-0 m-2" >
    {onCopyDropdownI? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
          <CodeBlock className="h-full" >
         {`
import { useState } from "react"
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"
import { ChevronDown} from "lucide-react"


export const DropdownUsage=()=>{
const [open, setOpen] = useState(false)
return(
<DropdownMenu open={open} onOpenChange={setOpen}>
<DropdownMenuTrigger
onClick={() => setOpen(prev => !prev)}
className="flex items-center gap-2">
  dropdown menu
<ChevronDown
 className={\`
h-4 w-4 transition-transform duration-200
\${open ? "rotate-180" : "rotate-0"}
\`}/>
    
</DropdownMenuTrigger>
<DropdownMenuContent >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem> Item2 </DropdownMenuItem>
<DropdownMenuItem> Item3 </DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
)}`}       

</CodeBlock>
</div>)}
</div>

      </div>
    <div className="mt-3 md:mt-6 ">
  <p className="text-2xl font-semibold" >Dropdown Side:Top & Bottom </p>
  </div> 
    <div className="space-x-3 mt-1 " >
      <button onClick={()=>setDropdownTop('preview')} className={`font-semibold  ${dropdownTop==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setDropdownTop('code')}className={`font-semibold  ${dropdownTop==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
      <div className="relative" >
       <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden mt-3 mb-4 " >
       {dropdownTop==='preview' && (
        <div className="h-full flex items-center justify-center  flex-col gap-4 md:flex-row " >
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Top </DropdownMenuTrigger>
<DropdownMenuContent side="top" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Bottom </DropdownMenuTrigger>
<DropdownMenuContent side="bottom" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

  </div>

       )}
       {dropdownTop==='code' &&(
        <div className="h-full overflow-y-auto no-scrollbar">
      <button  onClick={copyDropdownTop} className="absolute right-0 top-0 m-2" >
    {onCopyDropdownTop? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
          <CodeBlock className="h-full" >
         {`
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"



export const DropdownUsage=()=>{
return(
 <div className="h-full flex items-center justify-center  flex-col gap-4 md:flex-row " >
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Top </DropdownMenuTrigger>
<DropdownMenuContent side="top" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Bottom </DropdownMenuTrigger>
<DropdownMenuContent side="bottom" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</div>
)}`}       

</CodeBlock>
</div>)}
</div>

      </div>

      <div className="mt-3 md:mt-6 ">
  <p className="text-2xl font-semibold" >Dropdown Side:Left & Right </p>
  </div> 
    <div className="space-x-3 mt-1 " >
      <button onClick={()=>setDropdownLeft('preview')} className={`font-semibold  ${dropdownLeft==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setDropdownLeft('code')}className={`font-semibold  ${dropdownLeft==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
      <div className="relative" >
       <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden mt-3 mb-4 " >
       {dropdownLeft==='preview' && (
        <div className="h-full flex items-center justify-center  flex-col gap-4 md:flex-row " >
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Left </DropdownMenuTrigger>
<DropdownMenuContent side="left" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Right </DropdownMenuTrigger>
<DropdownMenuContent side="right" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

  </div>

       )}
       {dropdownLeft==='code' &&(
        <div className="h-full overflow-y-auto no-scrollbar">
      <button  onClick={copyDropdownLeft} className="absolute right-0 top-0 m-2" >
    {onCopyDropdownLeft? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" /> }
    </button>
          <CodeBlock className="h-full" >
         {`
import { 
DropdownMenu,
DropdownMenuContent,
DropdownMenuItem, 
DropdownMenuTrigger } from "must-ui/dropdown"



export const DropdownUsage=()=>{
return(
 <div className="h-full flex items-center justify-center  flex-col gap-4 md:flex-row " >
<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Left </DropdownMenuTrigger>
<DropdownMenuContent side="left" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>

<DropdownMenu>
<DropdownMenuTrigger>DropdownMenu Right </DropdownMenuTrigger>
<DropdownMenuContent side="right" >
<DropdownMenuItem> Item1 </DropdownMenuItem>
<DropdownMenuItem>Item2</DropdownMenuItem>
<DropdownMenuItem>Item3</DropdownMenuItem>
</DropdownMenuContent>
</DropdownMenu>
</div>
)}`}       

</CodeBlock>
</div>)}
</div>

      </div>

    </div> 
         
          
      
      </div>
   </div>
    </div>
    )
}

export default DropdownPage