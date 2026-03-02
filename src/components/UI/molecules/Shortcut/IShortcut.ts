import type {ReactNode} from "react";

export default interface IShortcut {
    name: string;
    icon?: ReactNode;
    onClick?: (name:string) => void;
}