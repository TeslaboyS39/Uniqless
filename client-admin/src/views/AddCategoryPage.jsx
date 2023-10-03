import { addCategoryAsyncSuccess } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:3000";

export default function AddCategoryPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [categoryState, setCategoryState] = useState({
    name: "",
    createdAt: "2023-09-06T12:00:00Z",
    updatedAt: "2023-09-06T12:00:00Z",
  });

  const onChangeInput = (el) => {
    const { name, value } = el.target;
    setCategoryState({
      ...categoryState,
      [name]: value,
    });
  };

  const handleSubmit = (el) => {
    el.preventDefault();

    dispatch(addCategoryAsyncSuccess(categoryState, navigate));
  };

  return (
    <>
      <div className="pb-0.5">
        <div className="bg-teal-600 rounded m-10">
          <div className="p-3 ">
            <h1 className="mt-2 ml-4 mb-4 text-2xl font-bold text-center">
              Add New Category
            </h1>
            <form onSubmit={handleSubmit} className="ml-4 mr-4 mt-4">
              <div className="mb-4">
                <label className="block">Name:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="name"
                  value={categoryState.name}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mt-4 mb-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
                >
                  Add Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
