import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductDetailAsync } from "../store/actions/actionCreator";

export default function ProductCard({ productData }) {
  const dispatch = useDispatch();

  const onClickProduct = (productId) => {
    dispatch(fetchProductDetailAsync(productId));
  };
  return (
    <>
      <div className="bg-gray-400 shadow-lg rounded-md w-[250px]">
        <figure>
          <img
            className="rounded-t-md aspect-square object-cover h-[300px]"
            src={productData.imageUrl}
            alt="img"
          />
        </figure>
        <div className="card-body p-2">
          <h2 className="card-title">Name: {productData.name}</h2>
          <p>Price: IDR {productData.price}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/detail-product/${productData.id}`}
              className="btn btn-primary"
            >
              Product Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
