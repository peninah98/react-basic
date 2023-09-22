import { useState } from "react"
import Counter from "./Counter"
import FunctionalComponent from "./FunctionaCounter"

export default function ConditionalComponent(){
    const [display, setDisplay] = useState(false)
    if(display){
        return  (
       <div>
        <Counter/>
       
        
       </div>
       )
    }
    else{
        return(
            <div>
                 <FunctionalComponent/>
            </div>
        )
    }

    // return (
    //     <div>
    //         <h1>This is conditional component</h1>
    //         <h1>Nothing to see here</h1>
    //     </div>
    // )
}