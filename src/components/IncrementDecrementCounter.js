import { connect } from 'react-redux'

function IncrementDecrementCounter(props){

    const handleIncrementCounter=()=>{
        props.onIncrement()
    }

    const handleDecrementCounter=()=>{
        props.onDecrement()
    }

    return(
        <div id='counterDiv'>
            <h5>Increment/Decrement Counter</h5>
            <div id='buttonDiv'>
                <button onClick={handleIncrementCounter}>Increment</button>
                <button onClick={handleDecrementCounter}>Decrement</button>
            </div>
        </div>
    )
}


const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrement:()=>dispatch({type:'INCREMENT'}),
        onDecrement:()=>dispatch({type:'DECREMENT'})
    }
}

export default connect(null,mapDispatchToProps)(IncrementDecrementCounter)