import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import useFetch from "../hooks/useFetch";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsAsyncSuccess } from "../store/actions/actionCreator";
const baseUrl = "http://localhost:3000";

export default function Home() {
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

  useEffect(() => {
    dispatch(fetchProductsAsyncSuccess());
    // dispatch(fetchStart());
    // fetch(baseUrl + "/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // const action = {
    //     //   type: "products/fetchSuccess",
    //     //   payload: data,
    //     // };
    //     const action = fetchSuccess(data);
    //     dispatch(action);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     dispatch(fetchFailed(err));
    //   });
  }, []);

  // const { data: isLoading } = useFetch("products");
  const [productDetail, setProductDetail] = useState(null);

  const onClickProduct = (productId) => {
    fetch(baseUrl + "/products/" + productId)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(products, "<<<<<<");
  return (
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
      <div className="flex justify-between items-center p-4">
        <Link to="/add-collection" className="btn btn-primary">
          Add Collection
        </Link>
        <hr />
      </div>
      {isLoading ? (
        <h1 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
          <span className="loading loading-spinner loading-lg">Loading...</span>
        </h1>
      ) : (
        <div className="flex justify-center items-stretch p-4 gap-5 flex-wrap">
          {products?.map((product, idx) => {
            return (
              <ProductCard
                key={product.id}
                productData={product}
                onClickProduct={onClickProduct}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
