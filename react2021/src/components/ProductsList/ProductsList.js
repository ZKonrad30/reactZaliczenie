import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";



class ProductsList extends React.Component {

render() {

  const { products, addToCart } = this.props;


  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <h2>Available products</h2>
        <ui>
          {products.map((product, index) => {
          return (
          <li
            onClick={() => 
              addToCart((prevState) => [...prevState,product])
            }  
          key={index}>
            {product.nazwa}
            </li>)
          })}
        </ui>
      </header>
    </div>
  );
}



}

export default ProductsList;

