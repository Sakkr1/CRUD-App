import { Link } from "react-router-dom";
import "./add.css";
import { useState } from "react";
import axios from "axios";

function AddProduct() {
  let [name, setName] = useState();
  let [categ, setCateg] = useState();
  let [price, setPrice] = useState();

  const getName = (e) => {
    setName(e.target.value);
  };
  const getCateg = (e) => {
    setCateg(e.target.value);
  };
  const getPrice = (e) => {
    setPrice(e.target.value);
  };

  let [successAlert, setSuccessAlert] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    if (name && price && categ) {
      axios.post("http://localhost:5000/products", {
        title: name,
        price: price,
        category: categ,
      });
      setSuccessAlert(true);
    }
  };

  return (
    <>
      <div className="add-product-wrapper">
        <form className="add-product-card">
          <h2>Add New Product</h2>
          <p>Fill in the details below</p>

          <div className="input-group">
            <label>Product Name</label>
            <input
              type="text"
              onChange={(e) => getName(e)}
              placeholder="Enter product name"
            />
          </div>

          <div className="input-group">
            <label>Category</label>
            <input
              type="text"
              onChange={(e) => getCateg(e)}
              placeholder="Enter category"
            />
          </div>

          <div className="input-group">
            <label>Price</label>
            <input
              type="number"
              onChange={(e) => getPrice(e)}
              placeholder="Enter price"
            />
          </div>

          <button className="btn-submit" onClick={(e) => handleClick(e)}>
            Add Product
          </button>
          <Link className="btn-submit btn2" to="/">
            Back to Products
          </Link>
        </form>
      </div>
      {successAlert && <AddAlert alert={() => setSuccessAlert(false)} />}
    </>
  );
}

function AddAlert({ alert }) {
  return (
    alert && (
      <div className="success-overlay">
        <div className="success-box">
          <div className="success-icon">✔</div>

          <h3 className="success-title">Product Added!</h3>
          <p className="success-text">
            The product has been added successfully.
          </p>

          <div className="success-actions">
            <button className="success-btn add-btn"  onClick={alert}>Add Another Product</button>
            <Link to="/" className="success-btn back-btn">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default AddProduct;
