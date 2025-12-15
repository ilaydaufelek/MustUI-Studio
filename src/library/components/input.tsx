import clsx from "clsx";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange' | 'value' | 'type'> {
    type?:'text' | 'password' | 'email';
    value?:string;
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder?:string;
    disabled?:boolean;
    name?:string;
    id?:string;
    className?:string;
    variant?:'outlined' |'elevated' |'filled'
    size?:'sm'| 'md' | 'lg'|'full'
}

export const Input=({
    type='text',
    value,
    onChange,
    placeholder='Email',
    disabled,
    name,
    id,
    className,
    variant="filled",
    size="md",
    ...rest
}:InputProps)=>{
 
    
    const baseStyle="outline-none rounded-md text-sm "
    const variants:Record<string,string>={
     outlined:"border border-zinc-700",
     elevated: "border border-zinc-700  focus:outline-none focus:ring-2 dark:focus:ring-white/25 focus:ring-black/25  focus:shadow-lg transition",
     filled:"bg-white dark:bg-black shadow-lg border  border-zinc-700/10 dark:border-zinc-700/30 "

    }
    const sizes:Record<string,string>={
        sm:"w-full max-w-[150px] py-2 px-1 ",
        md:"w-full max-w-[180px] py-2 px-1",
        lg:"w-full max-w-[210px] px-1 py-2 ",
        full:"w-full px-1 py-2"
    }
   return(
    <input 
    type={type}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
    className={clsx(
    baseStyle,
    variants[variant],
    sizes[size],
    className)}
    {...rest}
    />

   ) 
}