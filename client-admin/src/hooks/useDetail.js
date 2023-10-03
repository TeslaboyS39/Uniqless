import { useState, useEffect } from "react";
const baseUrl = "http://localhost:3000";

export default function useDetailProduct(productId) {
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductDetail(productId);
  }, [productId]);

  const fetchProductDetail = (productId) => {
    setIsLoading(true);
    fetch(baseUrl + "/products/" + productId)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
        setIsLoading(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return { productDetail, fetchProductDetail, isLoading };
}