import React from 'react'
import { connect } from 'react-redux'
import { increaseCounter, decreaseCounter } from '../redux/Actions/action'

const Counter = ({name, counter,decreaseCounterAction, increaseCounterAction }) => {
   
  return (
    <div className="">
        <h2>Name:{name}</h2>
         <h2>counter:{counter}</h2>  
        <button onClick={()=>increaseCounterAction()}>Increase</button>
        <button onClick={()=>decreaseCounterAction()}>Decrease</button> 

        <h1>counter:{counter}</h1>
    </div>
  )
}
////////////////
const mapStateToProps = (state)=>{
    return {
        counter: state.counter.counter,
        name: state.counter.name
    }
}
const mapDispatchToProps = (dispatch )=>{
    return{
        increaseCounterAction: ()=> dispatch(increaseCounter()),
        decreaseCounterAction: ()=>dispatch(decreaseCounter())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)