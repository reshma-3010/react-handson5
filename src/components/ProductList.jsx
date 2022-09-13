import React  from 'react'
import withSearch from './HOC'

 class ProductList extends React.Component {
  render() {
    return (
      <div>
    
        {
            this.props.products.map((item,index)=>{
                return(
                    <p style={{fontSize:"20px"}}key={index}>{item.productName} {item.price}</p>
                )
            })
            
        }
      </div>
    )
  }
}

export default withSearch(ProductList);