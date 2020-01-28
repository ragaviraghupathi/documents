import React from "react";
import './MyTable.css';
import { connect } from "react-redux";
import { managerDeletion } from "./redux/actions/managerDeletion";
export const MyTable = ({managers,managerDeletion}) => {
    return (
        <div>
            <table className="managers">
                <tr>
                    <th>Managers</th>
                    <th>Delete</th>
                </tr>
                {managers.map((manager) => {
                    return (<tr>
                        <td>{manager}</td>
                        <td>
                            <button onClick={( ) =>
                              {return managerDeletion(manager)}  
                            }>Delete</button>
                        </td>
                    </tr>)
                })}
          
            </table>
        </div>
    );
}
const mapStateToProps = (state,ownProps) => {
    return {
        managers:ownProps.managers
  }
  }
  const mapDispatchToProps = (dispatch,ownProps) => {
    return {
         managerDeletion
    }
  }
  export const ConnectedMyTable = connect(mapStateToProps,
    mapDispatchToProps()
  )(MyTable);
  