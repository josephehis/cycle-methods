import React from 'react';
import ChildComponent from './ChildComponent';

class parentComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            inputValue:0
        }

        //console.log('Constructor Method')
    }
    
    //this is used to change state based on props overtime
    // static getDerivedStateFromProps(props,state){
    //     console.log('Parent getDerivedStateFromProps method')
    //       return null;
    // }

    // componentDidMount(){
    //     console.log('Parent componentDidMount Method')
    // }

    handleInputChange=(event)=>{
        this.setState({inputValue:event.target.value})
    }

    render(){ // essential method
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