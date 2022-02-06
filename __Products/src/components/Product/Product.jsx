import './Product.css';

const Product = ({ product }) => {
  function showPriceHandler(e) {
    e.preventDefault();
    alert(`the price of ${product.title} : ${product.price}`);
  }

  return (
    <div /*onClick={showPriceHandler}*/>
      <h3 className="product-title">{product.title}</h3>
      <button className="btn show-price" onClick={showPriceHandler}>
        click to see price
      </button>
      {/* <h4 className="product-price hidden">{`$${product.price}`}</h4> */}
      <img className="product-image" src={product.image} alt={product.title} />
      <h3 className="product-rating">
        {'💙'.repeat(Math.round(product.rating.rate))}
        {'🤍'.repeat(5 - Math.round(product.rating.rate))}(
        {product.rating.count} Votes)
      </h3>
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default Product;
