import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as getActionCreator from './actions/getActions';
import * as tableActionCreator from './actions/tableActions';
import './app.css'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            fname: "",
            lname: "",
            age: 0
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick() {
        let element = {"firstName":this.state.fname,"lastName":this.state.lname,
                        "age":this.state.age };
             
       
        this.props.getData1.getActions(this.props.array2.length);
        this.props.getTable1.tableActions(element);
        

    }
    render() {
        const arrayData = this.props.array2.map((arr, i) => {
            return (<tr>
                <td>{arr.firstName}</td>
                <td>{arr.lastName}</td>
                <td>{arr.age}</td>
            </tr>);
        })

        return (
            <div>
                <form action="">
                    First name: <input type="text" name="fname" value={this.state.fname} onChange={this.handleChange.bind(this)} />
                    <br />
                    Last name: <input type="text" name="lname" value={this.state.lname} onChange={this.handleChange.bind(this)} />
                    <br />
                    Age:  <input type="text" name="age" value={this.state.age} onChange={this.handleChange.bind(this)} />
                    <br />

                </form>
                <input type="submit" value="Submit" onClick={this.handleClick.bind(this)} />

                {this.props.objNo ? <table className="table1">
                    <tbody>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                        {arrayData}
                    </tbody>
                </table> : <h1>register the details</h1>}



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
    return ({ getData1: bindActionCreators(getActionCreator, dispatch) ,
    getTable1:bindActionCreators(tableActionCreator,dispatch)
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
