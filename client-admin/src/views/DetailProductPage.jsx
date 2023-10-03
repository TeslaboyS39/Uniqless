import useDetailProduct from "../hooks/useDetail";
import { useParams } from "react-router-dom";

export default function DetailProductPage() {
  const { productId } = useParams();
  const { productDetail, isLoading } = useDetailProduct(productId);
  return (
    <>
      <div className="row pl-20 pr-20 pt-5 pb-5">
        <div className="p-2">
          {isLoading ? (
            <h1 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
              <span className="loading loading-spinner loading-lg">
                Loading...
              </span>
            </h1>
          ) : productDetail ? (
            <div className="mt-4 bg-orange-100 p-3 rounded">
              <div className="shadow-lg rounded-md p-2">
                <img
                  src={productDetail.imageUrl}
                  alt={productDetail.name}
                  className="rounded-md mx-auto h-[300px] w-[250px]"
                />
                <div className="flex flex-col items-center">
                  <p className="mt-2">Name: {productDetail.name}</p>
                  <p>Price: IDR {productDetail.price}</p>
                  <p>Description: {productDetail.description}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Product not found.</p>
          )}
        </div>
      </div>
    </>
  );
}
