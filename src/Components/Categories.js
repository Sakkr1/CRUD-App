import { useEffect, useState } from "react";
import axios from "axios";
import "./categs.css";

function Categories() {
  let [categories, setCategs] = useState([]);
  let [allCategs, setAllCategs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => res.data)
      .then((res) => {
        setAllCategs(res.map((e) => e.category));
        let categs = new Set(allCategs);
        setCategs([...categs]);
      });
  });


  return (
    <div className="categories-container">
      <h2>Categories</h2>
      <p className="subtitle">Manage product categories</p>
      <div className="categories-grid">
        {categories.map((e, i) => {
          return (
            <div className="category-card" key={i}>
              <h3>{e}</h3>
              <span className="count">{allCategs.filter((el) => el === e).length} Products</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
