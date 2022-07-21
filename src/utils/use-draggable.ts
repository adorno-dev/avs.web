import { RefObject } from "react"

export const useDraggable = (target: RefObject<HTMLElement>) => {

    function dragElement(element: HTMLElement) {

        const draggableHeader = document.querySelector(".draggable-header") as HTMLElement
    
        let positions: Array<number> = [0, 0, 0, 0]
    
        if (draggableHeader) {
            draggableHeader.onmousedown = dragMouseDown // move from header
            draggableHeader.style.cursor = 'move'
        } else {
            element.onmousedown = dragMouseDown // move from inside container
        }
    
        function dragMouseDown(e: MouseEvent) {
    
            e.preventDefault()
    
            positions[2] = e.clientX
            positions[3] = e.clientY
    
            document.onmouseup = dragElementStop
            document.onmousemove = dragElementStart
        }
    
        function dragElementStop() {
            document.onmouseup = null
            document.onmousemove = null
        }
    
        function dragElementStart(e: MouseEvent) {
            
            e.preventDefault()
    
            positions[0] = positions[2] - e.clientX
            positions[1] = positions[3] - e.clientY
    
            positions[2] = e.clientX
            positions[3] = e.clientY
    
            element.style.top = `${(element.offsetTop - positions[1])}px`
            element.style.left = `${(element.offsetLeft - positions[0])}px`
        }
    }

    if (target.current)
        dragElement(target.current as HTMLElement)
}