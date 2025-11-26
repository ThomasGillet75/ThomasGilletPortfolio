export default interface IShortcut {
    name: string;
    icon?: React.ReactNode;
    onClick?: (name:string) => void;
}