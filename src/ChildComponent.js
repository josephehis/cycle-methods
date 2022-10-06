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
    
    //this is used to change state based on props overtime
    static getDerivedStateFromProps(props,state){
        //console.log('Child getDerivedStateFromProps method')
          return{number: props.value*2};
    }

    // componentDidMount(){
    //     console.log('Child componentDidMount Method')
    // }

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