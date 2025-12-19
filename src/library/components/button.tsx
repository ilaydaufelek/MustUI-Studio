import clsx from "clsx";

interface  ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,'size' | 'onClick'>{
    children?:React.ReactNode;
    onClick?: () => void;
    size?:'sm'| 'md' | 'lg' |'icon'  ;
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
className,
...rest
}:ButtonProps)=>{
     
    const baseStyles=" font-medium  transition-colors flex items-center justify-center "

    const sizes: Record<string,string>={
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    icon:"w-10 h-10  overflow-hidden"
      
    }

    const variants:Record<string,string>={
    primary: "dark:bg-white bg-zinc-900  dark:text-black text-white dark:hover:bg-white/90 hover:bg-zinc-900/90   disabled:dark:bg-white/50 disabled:bg-zinc-900/50 disabled:opacity-60 ",
    secondary: "bg-gray-200 hover:bg-gray-300  text-gray-900 disabled:bg-gray-200/50 disabled:opacity-60 ",
    outline:" border border-zinc-300   dark:border-zinc-700 disabled:opacity-60  ",
    danger: "bg-red-800 text-white hover:bg-red-900 disabled:bg-red-800/50 disabled:opacity-60 ",
    }
    return(
        <button 
        onClick={onClick} 
        disabled={disabled}
        className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        size === "icon" ? "rounded-full" : "rounded-md", 
        disabled ? " cursor-default " : " cursor-pointer ",
        className
        )}
        {...rest}>
         {children}

        </button>
    )
}