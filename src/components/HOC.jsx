import React from 'react';

const products=[
    {productName:"santoor",price:550},
    {productName:"dove",price:300},
    {productName:"Mysore sandal",price:200},
    {productName:"Rexona",price:400},
    {productName:"Liril",price:500},
]

const withSearch =(WrappedComponent)=>{
    class SearchFunctionality extends React.Component{
        constructor(props)
        {
            super(props)
            this.state={
                search:"",
            }
        }


        updateSearch=(e)=>{
            this.setState({search:e.target.value})
        }

        filterProducts=()=>{
            return products.filter(product => product.productName.toLowerCase().includes(this.state.search));
        }
        render(){
            const updateProducts = this.filterProducts();
            return(
                <>
                <input type="text" onChange={this.updateSearch} />
                <WrappedComponent products={updateProducts} {...this.props}/>
                </>
            )
        }
    }
    return SearchFunctionality;
}
export default withSearch;