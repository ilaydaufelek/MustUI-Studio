import {create} from 'zustand';

type ModalType='buttonModal' | 'inputModal'

interface ModalStore{
    type:ModalType | null;
    isOpen: boolean;
    onOpen:(type:ModalType)=>void;
    onClose:()=>void;
}

export const useModal=create<ModalStore>((set)=>({
    type:null,
    isOpen:false,
    onOpen:(type)=>set({isOpen:true, type}),
    onClose:()=>set({type:null,isOpen:false})
}))