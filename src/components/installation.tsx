'use client'

import { Copy, CopyCheck } from "lucide-react"
import { useState } from "react"

const commands={
    first:"npm i must-ui",
    second:"pnpm add must-ui",
    third:"yarn add must-ui"
}


export const Installation=()=>{
    const [active,setActive]=useState<'first'| 'second'| 'third'>('first')
    const [copied,setCopied]=useState(false)

    const onCopy=()=>{
      navigator.clipboard.writeText(commands[active])
      setCopied(true) 
      setTimeout(()=>{
        setCopied(false)
      },5000) 
    }

    return(
    <div>
      <div className="flex justify-between items-center" >
           <div className="flex space-x-3">
        <button
          className={`px-1 py-1 rounded-md text-sm font-mono ${
            active === 'first'
              ? ' transition-colors bg-zinc-400/20 hover:bg-zinc-600/20'
              : ''
          }`}
          onClick={() => setActive('first')}
        >
          npm
        </button>

        <button
          className={`px-1 py-1 rounded-md text-sm font-mono ${
            active === 'second'
              ? 'transition-colors bg-zinc-400/20 hover:bg-zinc-600/20'
              : ''
          }`}
          onClick={() => setActive('second')}
        >
          pnpm
        </button>
        <button className={`px-1 py-1 rounded-md text-sm font-mono ${active ==='third'
            ?'transition-colors bg-zinc-400/20 hover:bg-zinc-600/20'
            :'border border-transparent'
        } `}
        onClick={()=>setActive('third')}>
        yarn
        </button>
      </div>
      <button  onClick={onCopy} >
       {copied ? <CopyCheck className="w-8 h-8 rounded-md transition-colors hover:bg-zinc-600/20 p-2  " /> : <Copy className="w-8 h-8 rounded-md  transition-colors hover:bg-zinc-600/20 p-2" />}
      </button>
      </div>

      <div className="mt-3 pt-1  border-t border-zinc-500/15 text-zinc-700 dark:text-zinc-400 font-semibold ">
        {active === 'first' && <div>npm i must-ui</div>}
        {active === 'second' && <div>pnpm add must-ui</div>}
        {active === 'third' &&  <div> yarn add must-ui</div>}
      </div>
    </div>
    )
}