'use client'
import { useModal } from "@/hooks/use-modal-store"
import CodeBlock from "../code-block"
import { CheckCheck, Copy } from "lucide-react"
import { useState } from "react"

 const buttonCodes: Record<string, string> = {
  default: ` import { Button } from "must-ui"

 export const Component=()=>{
 return(
 <Button variant="primary" size="md">
  Button
 </Button>
)}`,
  icons: ` import { Button } from "must-ui"
 import { PlusIcon } from "lucide-react"

 export const Component=()=>{
 return(
 <Button size="icon" variant="outline" >
 <PlusIcon size={16} />
 </Button>
)}`,
  disabled: ` import { Button } from "must-ui"
 import { LoaderCircleIcon } from "lucide-react"

 export const Component=()=>{
 return(
  <Button variant="outline" disabled>
  <LoaderCircleIcon
  className="-ms-1 mr-1  animate-spin"
  size={16}
  aria-hidden="true" />
  Button
  </Button>
)}`,
  
}

const imports= `npm i must-ui`

export const ButtonModal=()=>{
  const[copied,setCopied]=useState(false)
  const [importCopy,setImportCopy]= useState(false)
  const { isOpen, type, codeKey, onClose } = useModal()

  const onCopy=()=>{
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(()=>{
      setCopied(false)
    },5000)
  }
  
    const onCopyImport=()=>{
    navigator.clipboard.writeText(imports)
    setImportCopy(true)
    setTimeout(()=>{
      setImportCopy(false)
    },5000)
  }
    const isModalOpen=isOpen && type=== 'buttonModal'

    if (!isModalOpen) return null;
    if(!codeKey) return null
    const code = buttonCodes[codeKey]
    return(
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 ">
      
      <div className="dark:bg-zinc-900 p-8  dark:text-white md:w-[550px] w-[350px] bg-white text-black  rounded-lg relative  ">
        <button onClick={onClose} className="absolute top-0 right-0 dark:text-white m-2 cursor-pointer text-sm font-semibold " >X</button>
           <p className=" font-semibold text-xl mb-2 " >Installation</p>
          <div className="w-full py-4 border border-zinc-300 dark:bg-[#1E1E1E] rounded-md relative " >
           <button  onClick={onCopyImport}  className="absolute right-0  top-0 m-2 cursor-pointer  " >
         {importCopy ? <CheckCheck className="w-4 h-4" /> :  <Copy className='w-4 h-4' />}
          </button>
          
          <p className=" text-xs p-1 ml-2 " >
          {imports}
          </p>
          </div>
       <div className=" relative" >
         <button  onClick={onCopy}  className="absolute right-0 m-2 cursor-pointer  " >
         {copied ? <CheckCheck className="w-4 h-4" /> :  <Copy className='w-4 h-4' />}
          </button>
         <CodeBlock >{code}</CodeBlock> 
       </div>
      </div>
    </div>
    )
}