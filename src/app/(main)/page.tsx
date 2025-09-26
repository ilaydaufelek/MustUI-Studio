'use client'
import { ShaderAnimation } from "@/components/shader-animation";
import { TextShimmer } from "@/components/text-shimmer";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const MainPage = () => {
 const [isShow, setIsShow] = useState(true);
  const [showGetStarted, setShowGetStarted] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setIsShow(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

 
  useEffect(() => {
    if (!isShow) {
      const timer = setTimeout(() => setShowGetStarted(true), 1500); 
      return () => clearTimeout(timer);
    }
  }, [isShow]);

  return (
    <div className="relative flex h-screen  flex-col items-center justify-center overflow-hidden">
      <ShaderAnimation/>
      <div className="absolute pointer-events-none z-10  leading-none font-semibold tracking-tighter whitespace-pre-wrap text-white">
      <AnimatePresence>
        {isShow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <TextShimmer
              duration={1.2}
              className="text-4xl font-semibold [--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.blue.400)]"
            >
              Welcome MustUi Studio
            </TextShimmer>
          </motion.div>
        )}
      </AnimatePresence>
     <div className="space-y-6 w-full space-x-4  " >
      <AnimatePresence>
        {showGetStarted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-4xl font-semibold"
           
          >
           Start now, make a difference.
          </motion.div>
        )}
      </AnimatePresence>
     {showGetStarted && (
         <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1.5, ease: "easeInOut" }}
     className="
     bg-white text-zinc-900 border w-24   ml-auto  border-zinc-300 shadow-sm shadow-zinc-50/20  hover:bg-zinc-50 hover:shadow-md hover:shadow-zinc-200/30  active:bg-zinc-100 active:shadow-inner active:shadow-zinc-200/40 rounded-md h-10  flex items-center justify-center transition-colors  duration-200 ease-in-out">
        Get started 
      </motion.div>
     )}
    </div>
    
      </div>
    </div>
  )
}


export default MainPage;
