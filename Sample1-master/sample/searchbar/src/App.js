import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as getActionCreator from './actions/getActions';
import * as tableActionCreator from './actions/getTables';
import * as listActionCreator from './actions/getLists';
import SearchBarComponent from './components/searchbarComponent';
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    filterFilm1(etv, array2, getFilm) {
        var updatedArray = array2;
        updatedArray = updatedArray.filter((item) => {
            return item.toLowerCase().search(etv.toLowerCase()) !== -1;
        });

        getFilm(updatedArray);
    }
    handleList(item, getList2) {
        getList2(item);
    }
    handleTable(inp, getTable2, input) {
        //{this.props.tableStatus === true ? { table } : <div>select some option</div>}
        (input != "") ? (getTable2(inp)) : alert("Select something");
    }
    render() {
        const table = this.props.tableInput1;
        return (
            <div className="container">
              <h1>Movie Names Search</h1>
                <SearchBarComponent filterFilm1={this.filterFilm1}
                    fullarray={this.props.array1} films={this.props.films}
                    lstStatus={this.props.listStatus}
                    getFilm={this.props.getFilm1.getActions}
                    getTable={this.props.getTable1.getTables}
                    getList={this.props.getList1.getLists}
                    inputText={this.props.input}
                    handleList1={this.handleList}
                    handleClick1={this.handleTable}
                />
                <br />
                <hr />

                {this.props.tableStatus === true ? <table className="table table-bordered table-striped">
                    <thead><tr>Movie</tr></thead>
                    <tbody>
                        <tr>{table}</tr>
                    </tbody>
                </table> : <div>select some option</div>}
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
    return ({
        array1: state.getFilm.filmList,
        films: state.getFilm.filmsArray,
        input: state.getFilm.inputBox,
        tableStatus: state.getFilm.setTable,
        tableInput1: state.getFilm.tableInput,
        listStatus: state.getFilm.setList
    });
}
function mapDispatchToProps(dispatch) {
    return ({
        getFilm1: bindActionCreators(getActionCreator, dispatch),
        getTable1: bindActionCreators(tableActionCreator, dispatch),
        getList1: bindActionCreators(listActionCreator, dispatch)
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(App);