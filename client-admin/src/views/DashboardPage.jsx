import { useSelector, useDispatch } from "react-redux";
import {
  fetchProductsAsyncSuccess,
  deleteProductAsyncSuccess,
} from "../store/actions/actionCreator";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:3000";

export default function DashboardPage() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => {
    return state.counter;
  });
  const { products } = useSelector((state) => {
    return state.products;
  });
  const isLoading = useSelector((state) => {
    return state.products.isLoading;
  });
  const error = useSelector((state) => {
    return state.products.error;
  });

  const handleDelete = (productId) => {
    dispatch(deleteProductAsyncSuccess(productId));
  };

  useEffect(() => {
    dispatch(fetchProductsAsyncSuccess());
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-between items-center pt-5 px-10">
          <Link to="/add-collection" className="btn btn-primary">
            ➕ Add Product
          </Link>
          <hr />
        </div>
      </div>
      {isLoading ? (
        <h1 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
          <span className="loading loading-spinner loading-lg">Loading...</span>
        </h1>
      ) : (
        <div>
          <div className="overflow-x-auto px-10 pt-5">
            <table className="table">
              {/* head */}
              <thead className="bg-orange-400">
                <tr className="text-center">
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Created By</th>
                  <th>Main Image</th>
                  <th>Images</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="bg-teal-700 md:bg-opacity-75">
                {products.map((product, idx) => (
                  <tr key={product.id} className="text-center">
                    <td>{idx + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.categoryId}</td>
                    <td>IDR {product.price}</td>
                    <td>{product.authorId}</td>
                    <td>
                      <img
                        className="w-[15vh] h-[17vh] mx-auto rounded transition-transform transform hover:scale-110"
                        src={product.imageUrl}
                        alt="main image"
                      />
                    </td>
                    <td>
                      <button className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded">
                        Show Images
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/edit-product/${product.id}`}
                        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
