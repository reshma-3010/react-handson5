import React from 'react'
import './App.css';
import ProductList from './components/ProductList';
import PureComponent from './components/PureComponent';


class App extends React.Component {
  
render() {
      
        return (
            <div>
              <h1>HOC</h1>
              <h2>HOC is a function which takes a Wrapped component as input argument and returns a new Enhanced component</h2>
              <h2>Syntax:const EnhancedComponent = higherOrderComponent(WrappedComponent);</h2>
              <h3>Example for HOC</h3>
                <ProductList/>
                <h1>Pure Component</h1>
                <h2>When a class component extends React.PureComponent base class then React treated the component as Pure component.
                     The major difference between React.Component class and React.PureComponent is the implementation of shouldComponentUpdate(). 
                     In React.Component shouldComponentUpdate() will always returns true on the other hand in React.
                    PureComponent it will compare the current state and props with new state and props.</h2>
                <PureComponent />
            </div>
           
        )
    }
}

export default App;