import { addAdminAsyncSuccess } from "../store/actions/actionCreator";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const baseUrl = "http://localhost:3000";

export default function RegisterAdminPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [adminState, setAdminState] = useState({
    username: "",
    email: "",
    password: "",
    role: "admin",
    phoneNumber: "",
    address: "",
  });

  const onChangeInput = (el) => {
    const { name, value } = el.target;
    setAdminState({
      ...adminState,
      [name]: value,
    });
  };

  const handleSubmit = (el) => {
    el.preventDefault();

    dispatch(addAdminAsyncSuccess(adminState, navigate));
  };

  return (
    <>
      <div className="pb-0.5">
        <div className="bg-teal-600 rounded m-10">
          <div className="p-3 ">
            <h1 className="mt-2 ml-4 mb-4 text-2xl font-bold text-center">
              Register New Admin
            </h1>
            <form onSubmit={handleSubmit} className="ml-4 mr-4 mt-4">
              <div className="mb-4">
                <label className="block">Username:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="username"
                  value={adminState.username}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Email:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="email"
                  value={adminState.email}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Password:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="password"
                  value={adminState.password}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Phone Number:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="phoneNumber"
                  value={adminState.phoneNumber}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mb-4">
                <label className="block">Address:</label>
                <input
                  className="border border-dark-700 rounded-md p-2 w-full"
                  type="text"
                  name="address"
                  value={adminState.address}
                  onChange={onChangeInput}
                />
              </div>
              <div className="mt-4 mb-2">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
                >
                  Add New Admin
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
