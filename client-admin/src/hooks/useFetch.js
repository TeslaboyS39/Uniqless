import { useState, useEffect } from "react";
const baseUrl = "http://localhost:3000";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchProducts();
      }, []);

    const fetchProducts = () => {
        fetch(baseUrl + "/" + url)
          .then((res) => res.json())
          .then((data) => {
            // console.log(">>>>>", data);
            setData(data);
            setIsLoading(false);
          })
          .catch((err) => console.log(err))
          .finally(() => setIsLoading(false));
      };

      return { data, isLoading, fetchProducts };
}