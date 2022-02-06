//data
import Products from '../../data/Products';
//components
import Product from '../Product/Product';
//styling
import './ProductList.css';

const ProductList = () => {
  return (
    <div className="products">
      <h1>This a Product List:</h1>
      <ul className="product-list">
        {Products.map((product) => (
          //product card
          <li key={product.id} className="product">
            <Product product={product}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
