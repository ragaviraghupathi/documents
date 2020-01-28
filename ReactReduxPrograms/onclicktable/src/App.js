import React from 'react';
import { ConnectedMyTable  } from './MyTable';
import { connect } from "react-redux";
import { inputCreation } from './redux/actions/inputCreation';
import {managerCreation } from './redux/actions/managerCreation';

export const App = ({ name, inputCreation, managerCreation, managers }) => {
  console.log(name);
  return (
    <div >
      <label>Manager's Name:</label>
      <input
        onChange={e => {
          console.log(e.target.value);
          return inputCreation(e.target.value);
       
        }} value={name} placeholder="manager's name"/>
      
      <button onClick={() => {
        return (managerCreation(name));
      }
      }>Save</button>
      <ConnectedMyTable managers={managers}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.inputBoxReducer,
    managers:state.managerReducer
}
}
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    inputCreation,
    managerCreation
    
  }
}
export const ConnectedApp = connect(mapStateToProps,
  mapDispatchToProps()
)(App);
