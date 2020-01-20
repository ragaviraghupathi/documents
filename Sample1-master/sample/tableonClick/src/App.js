import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getActionCreator from './actions/getActions';
import './app.css';
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(){
        this.props.getData1.getActions(this.props.array2.length);
        
    }
    render() {
        const arrayData=this.props.array2.map((arr,i)=>{
               return( <tr>
                       <td>{arr.firstName}</td>
                       <td>{arr.lastName}</td>
                       <td>{arr.age}</td>
                   </tr>);
            })
        
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Object number </button>
               {this.props.objNo? <table className="table1">
                   <tbody>
                   <tr>
                       <th>First Name</th>
                       <th>Last Name</th>
                       <th>Age</th>
                   </tr>
                  {arrayData}
                 </tbody>
               </table> : <h1>click the button</h1>}
               
              
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return ({
        array2: state.getData.studentDetails,
        objNo: state.getData.noOfObjects
    }
    );

}
function mapDispatchToProps(dispatch) {
    return ({ getData1: bindActionCreators(getActionCreator, dispatch) });
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
