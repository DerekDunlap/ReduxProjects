import './App.css';
import { connect } from 'react-redux';
import IncrementDecrementCounter from './components/IncrementDecrementCounter';
import AddSubtractCounter from './components/AddSubtractCounter';
import DisplayCounter from './components/DisplayCounter';
import './components/Styles.css'

function App(props) {
  return (
    <div id='page-content'>
      <div id='topDiv'>
        <IncrementDecrementCounter/>
        <h1>{props.counter}</h1>
        <AddSubtractCounter/>
      </div>
      <div id='bottomDiv'>
        <DisplayCounter/>
      </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    counter:state.counter
  }
}

export default connect(mapStateToProps)(App);
