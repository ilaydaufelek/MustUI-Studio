import {create} from 'zustand';

type ModalType='buttonModal' | 'inputModal' | 'dialogModal' | 'dropdownMenuModal'

interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  codeKey: string | null; // hangi kod gösterilecek
  onOpen: (type: ModalType, codeKey: string) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  codeKey: null,
  onOpen: (type, codeKey) => set({ isOpen: true, type, codeKey }),
  onClose: () => set({ isOpen: false, type: null, codeKey: null }),
}))
