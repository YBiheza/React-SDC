import type { ButtonHTMLAttributes } from "react"

type TButtonProps = {
    type: string,
    disabled: boolean,
    label: string, 
    current?: boolean,
    cancel?: boolean,
    inactive?: boolean,
} & ButtonHTMLAttributes<HTMLButtonElement>

export type { TButtonProps }
