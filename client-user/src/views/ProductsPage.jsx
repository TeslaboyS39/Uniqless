import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAsyncSuccess } from "../store/actions/actionCreator";
const baseUrl = "http://localhost:3000";

export default function ProductsPage() {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => {
    return state.products;
  });
  const isLoading = useSelector((state) => {
    return state.products.isLoading;
  });

  useEffect(() => {
    dispatch(fetchProductsAsyncSuccess());
  }, []);

  return (
    <>
      <div className="row">
        <h1
          className="mt-4 text-center"
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#333",
            fontFamily: "roboto",
          }}
        >
          Our Collection
        </h1>
        <hr></hr>
        {isLoading ? (
          <h1 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
            <span className="loading loading-spinner loading-lg">
              Loading...
            </span>
          </h1>
        ) : (
          <div className="flex justify-center items-stretch p-4 gap-5 flex-wrap">
            {products.map((product, idx) => {
              return <ProductCard key={product.id} productData={product} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
