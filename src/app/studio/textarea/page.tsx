'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { Textarea } from "@/library/components/textarea"
import { Code, Github } from "lucide-react"
import { Button } from "must-ui/button"
import { useRouter } from "next/navigation"

const TextareaPage=()=>{
  const router=useRouter()
 return(
     <div className="min-h-screen" >
       <header className="   w-full  text-black dark:text-white h-[60px] flex items-center justify-end space-x-6 p-2">
       <p onClick={()=>router.push('')} className="text-sm font-semibold underline cursor-pointer  " >Installation</p>
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
        <div  className="h-full max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 p-6  " >
         <div className=" relative group border border-zinc-300 dark:border-zinc-800 rounded-md w-full min-h-[200px]  transition-all flex items-center justify-center ">
      <div   className="absolute top-0 right-0 m-2  opacity-0 group-hover:opacity-100 transition-opacity  text-zinc-800 dark:text-white px-2  rounded-md cursor-pointer"><Code className="w-4 h-4" /></div>
      <Textarea/>
      </div>

       <div className=" relative group border border-zinc-300 dark:border-zinc-800 rounded-md w-full min-h-[200px]  transition-all flex items-center justify-center ">
      <div   className="absolute top-0 right-0 m-2  opacity-0 group-hover:opacity-100 transition-opacity  text-zinc-800 dark:text-white px-2  rounded-md cursor-pointer"><Code className="w-4 h-4" /></div>
      <Textarea className="focus:ring-blue-300 focus:dark:ring-blue-600/40  focus:border-blue-500 dark:focus:border-blue-700 " />
      </div>
       <div className=" relative group border border-zinc-300 dark:border-zinc-800 rounded-md w-full min-h-[200px]  transition-all flex items-center justify-center ">
      <div   className="absolute top-0 right-0 m-2  opacity-0 group-hover:opacity-100 transition-opacity  text-zinc-800 dark:text-white px-2  rounded-md cursor-pointer"><Code className="w-4 h-4" /></div>
      <Textarea defaultValue={"merhaba!"} />
      </div>

       <div className=" relative group border border-zinc-300 dark:border-zinc-800 rounded-md w-full min-h-[200px]  transition-all flex items-center justify-center ">
      <div   className="absolute top-0 right-0 m-2  opacity-0 group-hover:opacity-100 transition-opacity  text-zinc-800 dark:text-white px-2  rounded-md cursor-pointer"><Code className="w-4 h-4" /></div>
      <Textarea  className=" focus:ring-pink-300 focus:dark:ring-pink-400/40  focus:border-pink-500 dark:focus:border-pink-700" placeholder="Bir şeyler yazmayı dene" />
      </div>
        </div>
       </div>
  </div>
 )
}

export default TextareaPage