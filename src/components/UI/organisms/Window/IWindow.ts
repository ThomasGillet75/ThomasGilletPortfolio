export default interface IWindow{
    title: string,
    id: number,
    width?: number,
    height?: number,
    x?: number,
    y?: number,
    z?: number,
    onClose?: (id:number) => void,
    onBringToFront?: (id:number) => void,
}