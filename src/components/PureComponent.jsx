import React from 'react'

 class PureComponent extends React.PureComponent {
    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment=()=>{
      this.setState({count:10});
    };
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Click here</button>
      </div>
    )
  }
}

export default PureComponent;