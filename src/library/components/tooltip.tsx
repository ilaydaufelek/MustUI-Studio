interface TooltipProps extends React.HTMLAttributes<HTMLDivElement> {
    children:React.ReactNode
    variant?:"primary" | "outline" | "secondary" | "danger";
}

