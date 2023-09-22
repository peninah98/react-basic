function FunctionEvent(){

    function handleClick(){
        console.log('Button is clicked')

    }
    return (
        <div>
            Functional component
            <button onClick={handleClick}>Click Me </button>
        </div>
    )
}

export default FunctionEvent