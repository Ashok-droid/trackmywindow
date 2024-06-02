import React from "react"
import WindowTracker from "./components/WindowTracker"

export default function App() {
    
    const [show, setShow] = React.useState(false)
    
    function toggle() {
        setShow(prevShow => !prevShow)
    }
    
    return (
        <div className="box-border bg-mainBgColor text-white m-0 p-8 flex flex-col">
            <button 
                onClick={toggle}
                className = "text-2xl  font-medium border-0 rounded-md bg-white p-4 cursor text-center text-gray-700"
            >
             Toggle WindowTracker   
            </button>
            {show && <WindowTracker />}
        </div>
    )
}
