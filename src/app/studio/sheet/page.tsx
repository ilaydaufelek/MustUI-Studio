'use client'
import  CodeBlock from "@/components/code-block"
import { Installation } from "@/components/installation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/library/components/input"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from '@/library/components/sheet'
import { Copy, CopyCheck } from "lucide-react"

import { Button } from "must-ui/button"
import { useState } from "react"


const usageSheet=`
import { 
Sheet, 
SheetClose,
SheetContent,
SheetDescription,
SheetFooter,
SheetHeader,
SheetTitle, 
SheetTrigger} from 'must-ui/sheet'
import { Input } from "must-ui/input"
import { Button } from "must-ui/button"

export const SheetDemo=()=>{
return(
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-3" >
<Sheet>
<SheetTrigger>Open left</SheetTrigger>
<SheetContent  side="left" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>
</div>
)}`

const usageSheetSide=`
import { 
Sheet, 
SheetClose,
SheetContent,
SheetDescription,
SheetFooter,
SheetHeader,
SheetTitle, 
SheetTrigger} from 'must-ui/sheet'
import { Input } from "must-ui/input"
import { Button } from "must-ui/button"

export const SheetDemo=()=>{
return(
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-3" >
<Sheet>
<SheetTrigger>Open left</SheetTrigger>
<SheetContent side="left" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
 <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
 <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>

<Sheet>
<SheetTrigger>Open right</SheetTrigger>
<SheetContent  side="right" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
 </SheetDescription>
 <div className="grid auto-rows-min gap-4 md:mt-3 ">
 <div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
 </div>
 <div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
 </div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>

<Sheet>
<SheetTrigger>Open top</SheetTrigger>
<SheetContent  side="top" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>

<Sheet>
<SheetTrigger>Open bottom</SheetTrigger>
<SheetContent  side="bottom" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>
</div>
)}
        `

const SheetPage=()=>{
  const[active,setActive]=useState<'preview'| 'code'>('preview')
  const[activeSheet,setActiveSheet]=useState<'preview'| 'code'>('preview')
  const [copySheet,setCopysheet]=useState(false)
  const [copySide,setCopySide]=useState(false)

  const onCopySheet=()=>{
    navigator.clipboard.writeText(usageSheet)
    setCopysheet(true)
    setTimeout(()=>{
     setCopysheet(false)
    },5000)
  }

    const onCopySheetSide=()=>{
    navigator.clipboard.writeText(usageSheetSide)
    setCopySide(true)
    setTimeout(()=>{
     setCopySide(false)
    },5000)
  }
 return(
     <div className="min-h-screen" >
       <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
        <span className="m-4" ><ThemeToggle/></span>
      </header>
      <div className="  w-full  flex flex-col items-center justify-center mt-12 space-y-6  " >
        <div className="  text-5xl md:text-7xl  font-bold text-center   " >
        Sheet
        </div>
        <p className=" text-center text-lg text-zinc-400 dark:text-zinc-300 text-md md:text-lg  max-w-3xl  leading-relaxed font-semibold  " >
       A collection of unique accordion components built with React and Tailwind CSS, designed for modern projects.
        </p>
     <Button className="" onClick={() =>
      window.open('https://github.com/ilaydaufelek/MustUI', '_blank', 'noopener,noreferrer')
  } > Got to GitHub</Button>
       </div>

       <div  className="min-h-screen flex  justify-center  mt-4 md:mt-8 " >
        <div  className="h-full max-w-[1000px]  w-full  grid grid-cols-1  gap-3 p-6  " >
     <p className="text-2xl font-semibold" >Installation</p>
        <div className="border border-zinc-600/15 rounded-md p-3 " >
          <Installation/>
        </div>

       <div className="mt-3 md:mt-6 ">
      <p className="text-2xl font-semibold" >Usage</p>
       </div>
       <div className="space-x-3 mt-1 " >
          <button onClick={()=>setActiveSheet('preview')} className={`font-semibold  ${activeSheet==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
          <button onClick={()=>setActiveSheet('code')}className={`font-semibold  ${activeSheet==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
          </div>
       <div className="relative" >
        <div className="  border border-zinc-600/15 rounded-md  h-[360px] overflow-hidden">
         {activeSheet==='preview' && (
       <div className=" h-full flex items-center justify-center " >
          <Sheet>
          <SheetTrigger>Open left</SheetTrigger>
          <SheetContent  side="left" >
                
          <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
          <div className="grid auto-rows-min gap-4 md:mt-3 ">
          <div className="grid gap-3  ">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
            <Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
          </div>
          <div className="grid gap-3">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
            <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
          </div>
        </div>
        <SheetFooter>
        <SheetClose asChild >
          <Button>Cancel</Button>
        </SheetClose>
        <Button>Accept</Button>
        </SheetFooter>
        </SheetContent>
        </Sheet>
       </div>
        
         )}

           {activeSheet==='code' && (
            
          <div className=" h-full overflow-y-auto no-scrollbar " >
            <button className="absolute right-0 top-0 m-2 "  onClick={onCopySheet} >
       {copySheet ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
         <CodeBlock className="h-full " >
          {`
import { 
Sheet, 
SheetClose,
SheetContent,
SheetDescription,
SheetFooter,
SheetHeader,
SheetTitle, 
SheetTrigger} from 'must-ui/sheet'
import { Input } from "must-ui/input"
import { Button } from "must-ui/button"

export const SheetDemo=()=>{
return(
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-3" >
<Sheet>
<SheetTrigger>Open left</SheetTrigger>
<SheetContent  side="left" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>
</div>
)}`}
         </CodeBlock>
     </div>
         )}

       </div>
       </div>


        <div className=" mt-3 md:mt-6  ">
          <p className="text-2xl font-semibold" >Side sheets</p>
          <div className="space-x-3 mt-4 " >
            <button onClick={()=>setActive('preview')} className={`font-semibold  ${active==='preview' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Preview</button>
          <button onClick={()=>setActive('code')}className={`font-semibold  ${active==='code' ? ' text-zinc-800 dark:text-zinc-100' : ' text-zinc-400 dark:text-zinc-500'} `} >Code</button>
          </div>
        </div>
        <div className="relative" >
          <div className="border border-zinc-600/15 rounded-md  h-[360px] overflow-hidden mb-4 " >
         {active ==='preview' &&(
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-6 gap-3 items-center h-full  " >
             <Sheet>
          <SheetTrigger>Open left</SheetTrigger>
          <SheetContent  side="left" >
                
          <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
          <div className="grid auto-rows-min gap-4 md:mt-3 ">
          <div className="grid gap-3  ">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
            <Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
          </div>
          <div className="grid gap-3">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
            <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
          </div>
        </div>
        <SheetFooter>
        <SheetClose asChild >
          <Button>Cancel</Button>
        </SheetClose>
        <Button>Accept</Button>
        </SheetFooter>
        </SheetContent>
        </Sheet>

         <Sheet>
          <SheetTrigger>Open right</SheetTrigger>
          <SheetContent  side="right" >
                
          <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
          <div className="grid auto-rows-min gap-4 md:mt-3 ">
          <div className="grid gap-3  ">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
            <Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
          </div>
          <div className="grid gap-3">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
            <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
          </div>
        </div>
        <SheetFooter>
        <SheetClose asChild >
          <Button>Cancel</Button>
        </SheetClose>
        <Button>Accept</Button>
        </SheetFooter>
        </SheetContent>
        </Sheet>

         <Sheet>
          <SheetTrigger>Open top</SheetTrigger>
          <SheetContent  side="top" >
                
          <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
          <div className="grid auto-rows-min gap-4 md:mt-3 ">
          <div className="grid gap-3  ">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
            <Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
          </div>
          <div className="grid gap-3">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
            <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
          </div>
        </div>
        <SheetFooter>
        <SheetClose asChild >
          <Button>Cancel</Button>
        </SheetClose>
        <Button>Accept</Button>
        </SheetFooter>
        </SheetContent>
        </Sheet>

         <Sheet>
          <SheetTrigger>Open bottom</SheetTrigger>
          <SheetContent  side="bottom" >
                
          <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
          <div className="grid auto-rows-min gap-4 md:mt-3 ">
          <div className="grid gap-3  ">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
            <Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
          </div>
          <div className="grid gap-3">
            <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
            <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
          </div>
        </div>
        <SheetFooter>
        <SheetClose asChild >
          <Button>Cancel</Button>
        </SheetClose>
        <Button>Accept</Button>
        </SheetFooter>
        </SheetContent>
        </Sheet>
          </div>
         )}

         {active==='code' && (
          <div className=" h-full overflow-y-auto no-scrollbar " >
          <button className="absolute right-0 top-0 m-2 "  onClick={onCopySheetSide} >
       {copySide ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
         <CodeBlock className="h-full " >
          {`
import { 
Sheet, 
SheetClose,
SheetContent,
SheetDescription,
SheetFooter,
SheetHeader,
SheetTitle, 
SheetTrigger} from 'must-ui/sheet'
import { Input } from "must-ui/input"
import { Button } from "must-ui/button"

export const SheetDemo=()=>{
return(
<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-3" >
<Sheet>
<SheetTrigger>Open left</SheetTrigger>
<SheetContent side="left" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
 <label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
 <Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>

<Sheet>
<SheetTrigger>Open right</SheetTrigger>
<SheetContent  side="right" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
 </SheetDescription>
 <div className="grid auto-rows-min gap-4 md:mt-3 ">
 <div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
 </div>
 <div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
 </div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>

<Sheet>
<SheetTrigger>Open top</SheetTrigger>
<SheetContent  side="top" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>

<Sheet>
<SheetTrigger>Open bottom</SheetTrigger>
<SheetContent  side="bottom" >
<SheetHeader>
<SheetTitle>Edit Profile</SheetTitle>
</SheetHeader>
<SheetDescription>
Make changes to your profile here. Click save when you&apos;re done.
</SheetDescription>
<div className="grid auto-rows-min gap-4 md:mt-3 ">
<div className="grid gap-3  ">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-name">Name</label>
<Input size="full" id="sheet-demo-name" defaultValue="Ethan Caldwell" />
</div>
<div className="grid gap-3">
<label className="dark:text-zinc-200 text-zinc-800 text-sm " htmlFor="sheet-demo-username">Username</label>
<Input size="full" id="sheet-demo-username" defaultValue="@ethan.caldwell" />
</div>
</div>
<SheetFooter>
<SheetClose asChild >
<Button>Cancel</Button>
</SheetClose>
<Button>Accept</Button>
</SheetFooter>
</SheetContent>
</Sheet>
</div>
  )}`}
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

export default SheetPage