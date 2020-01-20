import React from 'react';
import Tabs from './Tabs';
import './Tab.css'
class App extends React.Component{
    render(){
        return(
            <div>
                <Tabs>
                    <div label='tab1'>content of tab1</div>
                    <div label='tab2'>content of tab2</div>
                </Tabs>
            </div>              
        );
    }
}
export default App;