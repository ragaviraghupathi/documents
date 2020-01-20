import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: this.props.children[0].props.label
        };
    }
    onClickTabItem(tab) {
        this.setState({
            activeTab: tab
        });
    }
    render() {
        const {
            state: { activeTab },
            props: { children },
            onClickTabItem } = this;

        return (
            <div className='tabs'>
                <ol className='tab-list'>{children.map((child) => {
                    const { label } = child.props;
                    return (<Tab
                        activeTab={activeTab}
                        label={label}
                        key={label}
                        onClick={onClickTabItem.bind(this)} />);
                })}</ol>
                <div className='tab-content'>
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        );
    }
}
Tabs.propTypes = {
    children: PropTypes.array.isRequired
};

export default Tabs;