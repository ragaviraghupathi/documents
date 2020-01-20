import React from 'react';
import PropTypes from 'prop-types';
import './Tab.css';
class Tab extends React.Component {
    onClick(){
        const {onClick,label}=this.props;
        onClick(label);
    }
    render() {
        const {
            props: { activeTab, label },
            onClick } = this;
        let className = 'tab-list-item';
        if (label=== activeTab) {className += ' tab-list-active';}
        return (
            <li className={className}
                onClick={onClick.bind(this)}>{label}</li>
        );
    }
}
Tab.propTypes ={
    activeTab : PropTypes.string.isRequired,
    label : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
};
export default Tab;