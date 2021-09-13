import {connect} from 'react-redux'

function DisplayCounter(props){
    return (
        <div id='displayCounterDiv'>
            <h5>DisplayCounter</h5>
            <h4>{props.counter}</h4>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        counter:state.counter
    }
}

export default connect(mapStateToProps)(DisplayCounter)