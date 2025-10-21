'use client';
import { ThemeToggle } from "@/components/theme-toggle";
import { RevealImageList } from "@/components/ui/reveal-images";
import { Github } from "lucide-react";
import { Button } from "must-ui";
import { useRouter } from "next/navigation";


export default function HomePage() {
  const router=useRouter();
  
  return (
   <div className="w-screen h-screen dark:bg-black bg-white" >
     <header className="fixed top-0 left-0 w-full  text-black dark:text-white h-[60px] flex items-center  space-x-2 md:px-12 p-2
        font-bold text-2xl z-50   backdrop-blur-xs  ">
        <span className="cursor-pointer">MustUI Studio</span>
        <a   href="https://github.com/ilaydaufelek/MustUI" target="_blank" rel="noopener noreferrer"  className="rounded-full bg-zinc-900  hover:bg-zinc-700 transition-all  w-8 h-8 flex items-center justify-center  ml-auto  cursor-pointer  text-white " >
         <Github className="w-4 h-4  " /></a>
        <span className="m-2" ><ThemeToggle/></span>
      </header>
     <div className="flex flex-col items-center justify-center text-center min-h-screen bg-background text-foreground  space-y-6 ">
       <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
    <h1 className=" text-5xl md:text-7xl font-black text-foreground transition-all duration-500  ">
      Button Input
    </h1>
    <RevealImageList />
  </div>
      
      
      <p className=" text-md md:text-lg text-muted-foreground max-w-2xl px-2 md:px-0 leading-relaxed">
        This isn’t just another UI library — it’s a design system shaped by precision, performance, and intention.
    Each component is handcrafted to create consistency across your app while keeping your workflow fast and flexible.
    Think minimalism meets power.
      </p>
      <div >
        <Button onClick={()=>router.push('/studio')} >Get Started</Button>
      </div>
    </div>
   </div>
  );
}
