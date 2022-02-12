import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList(props) {
  const {shoppingProducts} = props;
  const clickToRemove = (indexRemoved) => {
    props.addToCart((prevState) => 
    prevState.filter((product, index) => index !== indexRemoved));
  };
  
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <div>
          <ul>
            {props.shoppingProducts.map((product, index) => {
              return (
                <li
                onContextMenu={(e) => {
                  e.preventDefault();
                  clickToRemove(index)
                }}
                key={index}
                >
                  {product.nazwa}
                </li>
              )
            })}
          </ul>
          {shoppingProducts.length === 0 && <div>Click on the products to add to the shopping list (right click to delete)</div>}
        </div>
      </header>
    </div>
  );
}

export default ShopingList;
