import { useState } from "react"
export default function ConditionalComponent(){

    const [display, setDisplay] = useState(true)
    return display ? 
    (
        <div> <h1>This is conditional component</h1></div>
    ) : (
        <div><h1>Nothing to see here</h1></div>
    )


    
}