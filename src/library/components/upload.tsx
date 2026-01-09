'use client'

import React, { useEffect, useRef, useState } from "react"
import { ArrowUpFromLine, Eye, Trash } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export interface UploadProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "value" | "onChange" | "multiple"
  > {
  value: File[] | null
  onChange: (files: File[] | null) => void
  multiple?: boolean
  label?: string
  helperText?: string
  error?: string
}

export const Upload = ({ onChange, value, multiple = false, ...props }: UploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [preview, setPreview] = useState<string[]>([])
  const [open, setOpen] = useState<number| null>(null)

  const files = value ?? []

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const selectedFiles = Array.from(e.target.files)

    if (multiple) {
      onChange([...(value ?? []), ...selectedFiles])
    } else {
      onChange([selectedFiles[0]])
    }

    e.target.value = ""
  }


  useEffect(() => {
  if (!value || value.length === 0) {
    setPreview([])
    return
  }

  const urls = value.map(file => file.type.startsWith("image/") ? URL.createObjectURL(file) : "")
  setPreview(urls)

  return () => urls.forEach(url => URL.revokeObjectURL(url))
}, [value])


  const handleRemove = (index: number) => {
    const next = files.filter((_, i) => i !== index)
    onChange(next.length ? next : null)

  }

  return (
    <div className="inline-block space-y-2">
      <input
        ref={inputRef}
        type="file"
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
        {...props}
      />
<div className="w-[56px]" >
    
      <AnimatePresence>
        {files.map((file, index) => (
          <motion.div
            key={file.name + index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="border border-zinc-800/20 rounded-md m-1 flex items-center gap-2 px-2 py-1 min-w-52 max-w-64"
          >
            {file.type.startsWith("image/") && preview[index] && (
              <div className="relative group w-12 h-12 flex-shrink-0">
                <img
                  src={preview[index]}
                  className="w-full h-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => setOpen(index)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-md transition"
                >
                  <Eye className="w-5 h-5 text-white" />
                </button>
              </div>
            )}

            <span className="flex-1 text-sm text-blue-600 truncate">
              {file.name}
            </span>

            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="flex-shrink-0"
            >
              <Trash className="w-4 h-4 text-red-500" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
</div>
      
       {open !== null && preview[open] && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        >
          <img
            src={preview[open]}
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] rounded"
          />
        </div>
      )}

    
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="px-4 py-2 border border-zinc-700 rounded-md text-sm flex items-center gap-2"
      >
        Upload
        <ArrowUpFromLine className="w-4 h-4" />
      </button>
    </div>
  )
}
