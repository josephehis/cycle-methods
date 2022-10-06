import React from 'react';
import ChildComponent from './ChildComponent';

class parentComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            inputValue:0
        }
    }

    handleInputChange=(event)=>{
        this.setState({inputValue:event.target.value})
    }

    render(){
        console.log('Parent render method')
        return(
            <div>
                <input onChange={this.handleInputChange} type='text'/>
                <ChildComponent value={this.state.inputValue}/>
                </div>
        )
        
    }
}

export default parentComponent;
