import axios from "axios";
import React from "react";

export const ProductsList = ({
  productList,
  setForm,
  selectProduct,
  getProducts,
  getWarning,
}) => {
  return (
    <div className="listproduct">
      <div className="sumary">
        <h1>Listado de Productos</h1>
        <p>
          <strong>Productos: </strong>
          {productList.length}
        </p>
        <button onClick={() => setForm(true)}>Nuevo producto</button>
      </div>
      <div className="card_container">
        {productList.map((product) => (
          <div className="card" key={product.id}>
            <h2>{product.name}</h2>
            <div className="info__product">
              <p>
                <strong>Categoria: </strong>
                <br />
                {product.category}
              </p>
              <p>
                <strong>Precio: </strong>
                <br />
                {product.price}
              </p>
              <p>
                <strong>Disponibilidad: </strong>
                <br />
                {product.isAvailable}
              </p>
            </div>
            <div className="icons">
              <div onClick={() => selectProduct(product)}>
                <i className="bx bxs-edit-alt bx-sm"></i>
              </div>
              <div onClick={() => getWarning(product)}>
                <i className="bx bxs-trash bx-sm"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
