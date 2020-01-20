import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as getActionCreator from './actions/getActions';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    handleClick(){
        this.props.getData1.getActions(this.props.array2.length);
        
    }
    render() {
        
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>Object number </button>
               {this.props.objNo? <h1>the no of objects is {this.props.objNo}</h1> : <h1>click the button</h1>}
               
              
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
