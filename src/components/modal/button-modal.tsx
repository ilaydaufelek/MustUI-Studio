'use client'
import { useModal } from "@/hooks/use-modal-store"
import CodeBlock from "../code-block"
import { CheckCheck, Copy } from "lucide-react"
import { useState } from "react"


export const ButtonModal=()=>{
  const[copied,setCopied]=useState(false)

  const code=`  import { Button } from "must-ui-v2";

  <Button
  variant={primary}
  size={md}>Button</Button>`
  const onCopy=()=>{
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },5000)
  }
  
    const {isOpen,type,onClose}=useModal()
    const isModalOpen=isOpen && type=== 'buttonModal'

    if (!isModalOpen) return null;
    return(
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 ">
      
      <div className="dark:bg-zinc-900 p-8  dark:text-white md:w-[450px] w-[350px] bg-white text-black  rounded-lg  relative ">
        <button onClick={onClose} className="absolute top-0 right-0 dark:text-white m-2 cursor-pointer text-sm font-semibold " >X</button>
        <button  onClick={onCopy}  className="absolute right-6 m-3 cursor-pointer  " >
         {copied ? <CheckCheck className="w-4 h-4" /> :  <Copy className='w-4 h-4' /> }
          </button>
        <CodeBlock>{code}</CodeBlock> 
      </div>
    </div>
    )
}