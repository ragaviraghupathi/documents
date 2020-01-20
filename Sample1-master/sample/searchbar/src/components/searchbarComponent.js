import React from 'react';
import '../app.css';
class SearchBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            show:true
        }
    }
    handleChange(event) {
        
        this.props.filterFilm1(event.target.value, this.props.fullarray, this.props.getFilm);
        this.setState({ text: event.target.value, show:true});
    }
    handleClick() {
        //alert(this.props.inputText);
        this.props.handleClick1(this.props.inputText, this.props.getTable);
    }
    handleClickList(item) {
        this.setState({show:false});
        this.props.handleList1(item, this.props.getList, this.props.inputText);
        this.setState({ text: item });
        const array = [];
        array[0] = item;
        this.props.filterFilm1(this.state.text, array, this.props.getFilm);

    }
    render() {
        
        return (
            <div>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="SEARCH"
                        name="search" onChange={this.handleChange.bind(this)} value={this.state.text} />

                    <div className="input-group-btn">
                        <button className="btn btn-default" type="submit" onClick={this.handleClick.bind(this)}>
                            <i className="glyphicon glyphicon-search" ></i>
                        </button>
                    </div>
                </div>
                <ul className="list-group">
                    {
                        this.props.films.map((item) => {
                            return (
                               
                                <li  className={this.state.show?"list-group-item":"list-block"}  data-category={item}
                                    key={item} onClick={this.handleClickList.bind(this, item)}
                                     >{item}
                                    
                                    </li>);
                        })  
                    }
        </ul>
            </div>
        );
    }
}
export default SearchBarComponent;