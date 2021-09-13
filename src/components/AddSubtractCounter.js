import {connect} from 'react-redux'
import {useState} from 'react'

function AddSubtractCounter(props){

    const [count,setCounter]=useState('')

    const handleOnChange=(e)=>{
        const value=e.target.value
        setCounter(value)
    }

    const handleAddCounter=()=>{
        props.onAddCounter(parseInt(count))
    }

    const handleSubtractCounter=()=>{
        props.onSubtractCounter(parseInt(count))
    }

    return (
        <div id='addSubtractDiv'>
            <h5>AddSubtractCounter</h5>
            <input type='text' onChange={handleOnChange} required/>
            <div id='buttonDiv'>
                <button onClick={handleAddCounter}>Add</button>
                <button onClick={handleSubtractCounter}>Subtract</button>
            </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onAddCounter:(count)=>dispatch({type:'ON_ADD_COUNTER',payload:count}),
        onSubtractCounter:(count)=>dispatch({type:'ON_SUBTRACT_COUNTER',payload:count})
    }
}

export default connect(null,mapDispatchToProps)(AddSubtractCounter)