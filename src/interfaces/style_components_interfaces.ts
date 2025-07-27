import type { ReactNode } from "react"

export interface IButton{
    children: string|number|ReactNode
    type?:'color'|'transpaent'
}