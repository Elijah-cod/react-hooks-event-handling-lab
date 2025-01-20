// Code Keypad Component Here

function Keypad (){
    function handleOnChange(){
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={handleOnChange}/>
    )
}

export default Keypad;