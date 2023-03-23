import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const ProductsForm = ({
  setForm,
  getProducts,
  productSelected,
  setProductSelected,
}) => {
  const { handleSubmit, register, reset } = useForm();
  const inputNull = { name: "", category: "", price: "", isAvaible: null };

  const submit = (data) => {
    if (productSelected) {
      axios
        .put(
          `https://products-crud.academlo.tech/products/${productSelected.id}/`,
          data
        )
        .then(() => {
          getProducts();
          closeForm();
        });
    } else {
      axios
        .post(`https://products-crud.academlo.tech/products/`, data)
        .then(() => {
          getProducts();
          closeForm();
        });
    }
  };
  const closeForm = () => {
    setForm(false);
    setProductSelected(null);
  };

  useEffect(() => {
    if (productSelected) {
      reset(productSelected);
    } else {
      reset(inputNull);
    }
  }, [productSelected]);

  return (
    <div className="container__warning">
      <div className="form">
        <button className="btn_close" onClick={() => closeForm()}>X</button>
        <h3>Productos</h3>
        <form onSubmit={handleSubmit(submit)}>
            <p>
                Producto :
                <input type="text" id="name" {...register("name")} />
            </p>
          <input type="text" id="category" {...register("category")} />
          <input type="text" id="price" {...register("price")} />
          <input type="boolean" id="isAvailable" {...register("isAvailable")} />
          <button className="btn__cru" type="submit">
            {productSelected ? "Actualizar" : "Crear"} Producto
          </button>
        </form>
      </div>
    </div>
  );
};
