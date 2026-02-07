import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./remove.css";

function Table() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => res.data)
      .then((res) => setProducts(res));
  }, []);

  let [alertShow, setAlertShow] = useState(false);
  const alert = () => {
    setAlertShow(true);
  };

  let [ID, setID] = useState();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      setProducts(products.filter((e) => e.id !== id));
    });
    setAlertShow(true);
  };

  return (
    <div className="table-container">
      <div className="table-head">
        <h2>Products List</h2>
        <Link className="btn" to="/products/add">
          Add Product
        </Link>
      </div>
      <table className="modern-table">
        <>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td className="actions">
                  <Link
                    className="btn-action view"
                    to={`products/${product.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn-action edit"
                    to={`products/edit/${product.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn-action remove"
                    onClick={() => {
                      setID(product.id);
                      alert();
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      </table>
      {alertShow && (
        <RemoveAlert
          alert={() => setAlertShow(false)}
          onDelete={() => {
            handleDelete(ID);
            setAlertShow(false);
          }}
        />
      )}
    </div>
  );
}

function RemoveAlert({ alert, onDelete }) {
  return (
    alert && (
      <div className="confirm-overlay">
        <div className="confirm-box">
          <div className="confirm-icon">!</div>

          <h3 className="confirm-title">Delete Product</h3>
          <p className="confirm-text">
            Are you sure you want to remove this product? This action cannot be
            undone.
          </p>

          <div className="confirm-actions">
            <button className="confirm-btn cancel-btn" onClick={alert}>
              Cancel
            </button>
            <button
              className="confirm-btn delete-btn"
              onClick={() => {
                alert();
                onDelete();
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    )
  );
}
export default Table;
