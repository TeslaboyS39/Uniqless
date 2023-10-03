import { editProductAsyncSuccess } from "../store/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:3000";

export default function EditProductPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();

  const products = useSelector((state) => state.products.products);
  const productToEdit = products.find(
    (product) => product.id === Number(productId)
  );

  const [productState, setProductState] = useState({
    name: productToEdit.name,
    price: productToEdit.price,
    description: productToEdit.description,
    imageUrl: productToEdit.imageUrl,
    authorId: 1,
    categoryId: productToEdit.categoryId,
  });

  const onChangeInput = (el) => {
    const { name, value } = el.target;
    setProductState({
      ...productState,
      [name]: name === "price" || name === "categoryId" ? Number(value) : value,
    });
  };

  const handleSubmit = (el) => {
    el.preventDefault();
    dispatch(editProductAsyncSuccess(productId, productState, navigate));
  };

  return (
    <>
      <div className="pb-0.5">
        <div className="bg-teal-600 rounded m-10">
          <div className="p-3 ">
            <h1 className="mt-2 ml-4 mb-4 text-2xl font-bold text-center">
              Edit/Update Product
            </h1>
            <form onSubmit={handleSubmit} className="ml-4 mr-4 mt-4">
              <div className="mb-4">
                <label className="block">Name:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="name"
                  value={productState.name}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Price:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="number"
                  name="price"
                  value={productState.price}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Description:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="description"
                  value={productState.description}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Image URL:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="imageUrl"
                  value={productState.imageUrl}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Category Id:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="number"
                  name="categoryId"
                  value={productState.categoryId}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mt-4 mb-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
                >
                  Edit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
