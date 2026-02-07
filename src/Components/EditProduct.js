import { Link, useParams } from "react-router-dom";
import "./add.css";
import { useEffect, useState } from "react";
import axios from "axios";

function EditProduct() {
  let [name, setName] = useState();
  let [categ, setCateg] = useState();
  let [price, setPrice] = useState();
  let { id } = useParams();

  const getName = (e) => {
    setName(e.target.value);
  };
  const getCateg = (e) => {
    setCateg(e.target.value);
  };
  const getPrice = (e) => {
    setPrice(e.target.value);
  };
  
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
    .then(res => res.data)
    .then(res => {
        setName(res.title)
        setCateg(res.category)
        setPrice(res.price)
    });
  }, [id])
  let [editAlert, setEditAlert] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    name && price && categ && axios.put(`http://localhost:5000/products/${id}`, {
      title: name,
      price: price,
      category: categ,
    });
    setEditAlert(true);
  };


  return (
    <>
    <div className="add-product-wrapper">
      <form className="add-product-card">
        <h2>Edit Product</h2>
        <p>Fill in the details below</p>

        <div className="input-group">
          <label>Product Name</label>
          <input
            type="text"
            onChange={(e) => getName(e)}
            placeholder="Enter product name"
            value={name}
          />
        </div>

        <div className="input-group">
          <label>Category</label>
          <input
            type="text"
            onChange={(e) => getCateg(e)}
            placeholder="Enter category"
            value={categ}
          />
        </div>

        <div className="input-group">
          <label>Price</label>
          <input
            type="number"
            onChange={(e) => getPrice(e)}
            placeholder="Enter price"
            value={price}
          />
        </div>

        <button className="btn-submit" onClick={(e) => handleClick(e)}>
          Edit This Product
        </button>
        <Link className="btn-submit btn2" to="/">
          Back to Products
        </Link>
      </form>
    </div>
    {editAlert && <EditAlert alert={() => setEditAlert(false)} />}
    </>
    )
};

function EditAlert({ alert }) {
  return (
    alert && (
      <div className="success-overlay">
        <div className="success-box">
          <div className="success-icon">✔</div>

          <h3 className="success-title">Product Edited!</h3>
          <p className="success-text">
            The product has been edited successfully.
          </p>

          <div className="success-actions">
            <Link to="/" className="success-btn back-btn">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    )
  );
}


export default EditProduct;