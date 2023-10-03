import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProductDetailAsync } from "../store/actions/actionCreator";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const { productDetail, isLoading } = useSelector(
    (state) => state.productDetail
  );

  useEffect(() => {
    dispatch(fetchProductDetailAsync(productId));
  }, [dispatch, productId]);

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
              <div className="shadow-lg rounded-md p-2 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src={productDetail.imageUrl}
                    alt={productDetail.name}
                    className="rounded-md h-[300px] w-[250px]"
                  />
                </div>
                <div className="flex-grow ml-4">
                  <div>
                    <p className="text-xl font-bold mb-2">
                      {productDetail.name}
                    </p>
                    <div className="flex justify-between mb-2">
                      <p>IDR {productDetail.price}</p>
                      <p className="px-5 bg-red-300 text-center rounded">
                        {productDetail.categoryId}
                      </p>
                    </div>
                    <hr></hr>
                  </div>
                  <div>
                    <p>{productDetail.description}</p>
                  </div>
                  <div className="mt-3">
                    <p>Posted by: {productDetail.authorId}</p>
                  </div>
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
