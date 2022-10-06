import React from 'react';

class ChildComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            color:'black',
            number:0,
        }

        console.log('Constructor Method')
    }
    
    static getDerivedStateFromProps(props,state){
          return{number: props.value*2};
    }

    render(){
        console.log('Child render method')
        return(
            <div style={{color:this.state.color}}>
                Number:{this.state.number}
            </div>
        )
        
    }
}

export default ChildComponent;
