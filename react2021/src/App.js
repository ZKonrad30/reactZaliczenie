import React, {useState} from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import AddProducts from './components/AddProducts/AddProducts';
import ProductsFilters from './components/ProductsFilters/ProductsFilters';
import styles from './App.module.scss';
import produkty from './common/consts/produkty';

function App() {

  const [displayedProducts] = useState(produkty);
  const [shoppingProducts, addToCart] = useState([]);
  
  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters />
      <div className={styles.columnsWrapper}>
        <ProductsList 
        products={displayedProducts}
        addToCart={addToCart}

        />
        <ShopingList 
        shoppingProducts={shoppingProducts}
        addToCart={addToCart}
        />
      </div>
    </ div>
  );
}

export default App;
