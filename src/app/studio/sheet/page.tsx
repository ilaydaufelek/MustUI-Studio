'use client'
import { Installation } from "@/components/installation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Input } from "@/library/components/input"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger} from '@/library/components/sheet'

import { Code, Github } from "lucide-react"
import { Button } from "must-ui"
import { useRouter } from "next/navigation"

const SheetPage=()=>{
  const router=useRouter()
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
        <div className=" mt-3 md:mt-6">
          <p className="text-2xl font-semibold" >Side sheets</p>
          <div className="space-x-3" >
            <button className="font-semibold mt-4 " >Preview</button>
          <button className="font-semibold mt-4" >Code</button>
          </div>
        </div>
        <div className="border border-zinc-600/15 rounded-md grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-6  items-center  h-[360px] " >
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
        <SheetFooter className="" >
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
        <SheetFooter className="" >
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
        <SheetFooter className="" >
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
        <SheetFooter className="" >
        <SheetClose asChild >
          <Button>Cancel</Button>
        </SheetClose>
        <Button>Accept</Button>
        </SheetFooter>
        </SheetContent>
        </Sheet>

        </div>
        </div>
       </div>
  </div>
 )
}

export default SheetPage