//data
import Products from '../../data/Products';
//components
import Product from '../Product/Product';
//styling
import './MenProducts.css';

const MenProducts = () => {
  const menProducts = Products.filter(
    (product) => product.category === "men's clothing" && product.price > 100
  );
  return (
    <div className="menProducts">
      <h1>This is men's Product List with price over $100 :</h1>
      <ul className="product-list">
        {menProducts.map((product) => (
          <li key={product.id} className="product">
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenProducts;
