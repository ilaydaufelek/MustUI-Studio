import clsx from "clsx";

type  ButtonProps={
    children?:React.ReactNode;
    onClick?: () => void;
    size?:'sm'| 'md' | 'lg'   ;
    variant?:"primary" | "outline" | "secondary" | "danger";
    disabled?:boolean;
    className?:string;
}

export const Button=({
children,
onClick, 
size="md",
variant="primary",
disabled=false,
className
}:ButtonProps)=>{
     
    const baseStyles="rounded-md font-medium  transition-colors"

    const sizes: Record<string,string>={
      "sm":"px-2 py-1 text-sm" ,
      "md":"px-4 py-2 text-base",
      "lg":"px-6 py-4 text-lg",
      
    }

    const variants:Record<string,string>={
    primary: "dark:bg-white bg-zinc-900  dark:text-black text-white dark:hover:bg-white/90 hover:bg-zinc-900/90 cursor-pointer ",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 cursor-pointer ",
    outline:"border border-zinc-300 cursor-pointer",
    danger: "bg-red-800 text-white hover:bg-red-900 cursor-pointer",
    }
    return(
        <button 
        onClick={onClick} 
        disabled={disabled}
        className={clsx(
        baseStyles,
        sizes[size],
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed",
        className
        )}>
         {children}

        </button>
    )
}