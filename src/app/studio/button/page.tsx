'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/library/components/button"
import { Installation } from "@/components/installation"
import { useState } from "react"
import CodeBlock from "@/components/code-block"
import { Copy, CopyCheck } from "lucide-react"
import PropsTable from "@/components/component-docs"


const textUsage=`
import {Button} from "must-ui/button"
export const ButtonUsage=()=>{
 return(
 <Button size="md" >Button</Button>
)}
`
const textVariants=`
 import {Button} from "must-ui/button"
 export const ButtonUsage=()=>{
 return(
<>
<Button variant="outline" size="md" >Outline</Button>
<Button variant="primary" size="md" >Primary</Button>
<Button variant="secondary" size="md">Primary</Button>
<Button variant="danger" size="md" >Danger</Button>
<Button disabled size="md" >Disabled</Button> 
</>
)}
`
const textSizes=`
 import {Button} from "must-ui/button"
 export const ButtonUsage=()=>{
 return(
<>
<Button variant="outline" size="sm" >Small</Button>
<Button variant="outline" size="md" >Medium</Button>
<Button variant="outline"  size="lg" >Large</Button>
<Button variant="outline" size="icon">Icon</Button> 
</>
)}
`

 const ButtonPage=()=>{
   const[usage,setUsage]=useState<'preview' | 'code'>("preview")
   const[variants,setVariants]=useState<'preview' | 'code'>("preview")
   const[sizes,setSizes]=useState<'preview' | 'code'>("preview")
   const[copyUsage,setCopyUsage]=useState(false)
   const[copyVariants,setCopyVariants]=useState(false)
   const[copySizes,setCopySizes]=useState(false)
    
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

const onCopySizes=()=>{
  navigator.clipboard.writeText(textSizes)
  setCopySizes(true)
  setTimeout(()=>{
    setCopySizes(false)
  },5000)
}

    return(
      <div className="  min-h-screen ">
    <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
        <span className="m-2" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
        Button
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
       A collection of unique accordion components built with React and Tailwind CSS, designed for modern projects.
        </p>
         <Button className="" onClick={() =>
      window.open('https://github.com/ilaydaufelek/MustUI', '_blank', 'noopener,noreferrer')
  } > Got to GitHub</Button>
       </div>
     
      <div className="  min-h-screen flex  justify-center  mt-4 md:mt-8 ">
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
      {usage==='preview' && (
       <div className="w-full h-full flex justify-center items-center" >
         <Button size="md" >Button</Button>
       </div>
      )}
      {usage==='code'&&(
      <div className=" h-full overflow-y-auto no-scrollbar " >
      <button className="absolute right-0 top-0 m-2 "  onClick={onCopyUsage} >
       {copyUsage ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
        <CodeBlock className="h-full" >
        {` 
 import {Button} from "must-ui/button"
 export const ButtonUsage=()=>{
 return(
 <Button size="md" >Button</Button>
)}
          
  `}
        </CodeBlock>
      </div>
      )}

      </div>
    </div>
      <div className="mt-3 md:mt-6 ">
    <p className="text-2xl font-semibold" >Button Variants</p>
    </div>
    <div className="space-x-3 mt-1 " >
      <button onClick={()=>setVariants('preview')} className={`font-semibold  ${variants==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setVariants('code')}className={`font-semibold  ${variants==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
    <div className="relative" >
      <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden" >
      {variants==='preview' && (
   <div className=" h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-6 gap-3 place-items-center">
  <Button variant="outline" size="md">Outline</Button>
  <Button variant="primary" size="md">Primary</Button>
   <Button variant="secondary" size="md">Secondary</Button>
  <Button variant="danger" size="md">Danger</Button>
  <Button disabled size="md">Disabled</Button>
</div>
      )}
      {variants==='code'&&(
      <div className=" h-full overflow-y-auto no-scrollbar " >
      <button className="absolute right-0 top-0 m-2 "  onClick={onCopyVariants} >
       {copyVariants ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
        <CodeBlock className="h-full" >
        {` 
 import {Button} from "must-ui/button"
 export const ButtonUsage=()=>{
 return(
<>
<Button variant="outline" size="md" >Outline</Button>
<Button variant="primary" size="md" >Primary</Button>
<Button variant="secondary" size="md">Primary</Button>
<Button variant="danger" size="md" >Danger</Button>
<Button disabled size="md" >Disabled</Button> 
</>
)}
          
  `}
        </CodeBlock>
      </div>
      )}

      </div>
    </div>
       
       
        <div className="mt-3 md:mt-6 ">
    <p className="text-2xl font-semibold" >Button Sizes</p>
    </div>
    <div className="space-x-3 mt-1 " >
      <button onClick={()=>setSizes('preview')} className={`font-semibold  ${sizes==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
      <button onClick={()=>setSizes('code')}className={`font-semibold  ${sizes==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
      </div>
    <div className="relative" >
      <div className="border  border-zinc-600/15 rounded-md   h-[360px] overflow-hidden mb-4" >
      {sizes==='preview' && (
       <div className=" h-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-6 gap-3 place-items-center">
        <Button variant="outline" size="sm" >Small</Button>
        <Button variant="outline" size="md" >Medium</Button>
        <Button variant="outline"  size="lg" >Large</Button>
        <Button variant="outline" size="icon" >Icon</Button>
       </div>
      )}
      {sizes==='code'&&(
      <div className=" h-full overflow-y-auto no-scrollbar " >
      <button className="absolute right-0 top-0 m-2 "  onClick={onCopySizes} >
       {copySizes ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
        <CodeBlock className="h-full" >
        {` 
 import {Button} from "must-ui/button"
 export const ButtonUsage=()=>{
 return(
<>
<Button variant="outline" size="sm" >Small</Button>
<Button variant="outline" size="md" >Medium</Button>
<Button variant="outline"  size="lg" >Large</Button>
<Button variant="outline" size="icon">Icon</Button>
</>
)}
          
  `}
        </CodeBlock>
      </div>
      )}

      </div>
    </div> 
          <div className="mt-3 md:mt-6 ">
    <p className="text-2xl font-semibold" >API Reference</p>
    </div>
        <PropsTable
  items={[
    {
      prop: "variant",
      type: [
        "outline",
        "primary",
        "secondary",
        "danger",
       "disabled"
      ],
    },
    {
      prop: "size",
      type: [
        "sm",
        "md", 
        "lg",
        "icon",
       
        
      ],
    },
    
  ]}
/>   
      
      </div>
     
     
   </div>
   </div>
    )
}

export default ButtonPage