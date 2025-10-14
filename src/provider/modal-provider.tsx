import { ButtonModal } from "@/components/modal/button-modal"
import { InputModal } from "@/components/modal/input-modal"
import { useEffect, useState } from "react"

export const ModalProvider=()=>{
    const[mounted,setMounted]=useState(false)
    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted){
       return null 
    }
        
    
    return(
        <>
        <ButtonModal/>
        <InputModal/>
        </>
    )
}