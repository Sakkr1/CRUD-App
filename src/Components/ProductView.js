import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Components/view.css";

function ProductView() {
  let { id } = useParams();
  let [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => res.data)
      .then((res) => setProduct(res));
  }, [id]);

  return (
    <div className="product-container">
      {/*  Image  */}
      <div className="product-image">
        <div className="image-frame">
          <img src={product.image ? product.image : <h2>Image Is Not Avaible</h2>} alt="Product" width={200}/>
        </div>
      </div>

      {/*  Info  */}
      <div className="product-info">
        <h1>{product.title}</h1>
        <p className="category">Category: {product.category}</p>

        <p className="description">{product.description}</p>

        <div className="price">${product.price}</div>

        <div className="actions">
          <button className="btn primary">Add to Cart</button>
          <Link className="btn secondary" to="/">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductView;
