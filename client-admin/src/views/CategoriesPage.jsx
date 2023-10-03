import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategoriesAsyncSuccess,
  deleteCategoryAsyncSuccess,
} from "../store/actions/actionCreator";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const baseUrl = "http://localhost:3000";

export default function CategoriesPage() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => {
    return state.counter;
  });
  const { categories } = useSelector((state) => {
    return state.categories;
  });
  const isLoading = useSelector((state) => {
    return state.categories.isLoading;
  });
  const error = useSelector((state) => {
    return state.categories.error;
  });

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategoryAsyncSuccess(categoryId));
  };

  useEffect(() => {
    dispatch(fetchCategoriesAsyncSuccess());
  }, []);
  return (
    <>
      <div className="pb-5">
        <div>
          <div className="flex justify-between items-center pt-5 px-10">
            <Link to="/add-category" className="btn btn-primary">
              ➕ Create Category
            </Link>
            <hr />
          </div>
        </div>
        {isLoading ? (
          <h1 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
            <span className="loading loading-spinner loading-lg">
              Loading...
            </span>
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
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="bg-teal-700 md:bg-opacity-75">
                  {categories.map((category, idx) => (
                    <tr key={category.id} className="text-center">
                      <td>{idx + 1}</td>
                      <td>{category.name}</td>
                      <td>{category.createdAt}</td>
                      <td>{category.updatedAt}</td>
                      <td>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
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
      </div>
    </>
  );
}
