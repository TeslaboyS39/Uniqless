import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
const baseUrl = "http://localhost:3000";

export default function useAdd() {
  const { fetchProducts } = useFetch("products");
  const navigate = useNavigate();
  const [productState, setProductState] = useState({
    name: "",
    price: 0,
    description: "default description",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-DVl044Iog_egG8roOUkpUyjWCQi8FVdhII0Q9ZTwrBW2bDQsQVorkokK46FtFBm7CTA&usqp=CAU",
    authorId: 1,
    categoryId: 0,
  });

  const onChangeInput = (event) => {
    const { target } = event;
    const { value, name: nameInput } = target;

    setProductState({
      ...productState,
      [nameInput]: value,
    });
  };

  const onSubmitProduct = (event) => {
    event.preventDefault();
    fetch(baseUrl + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productState),
    })
      .then((res) => {
        if (res.ok) {
          fetchProducts();
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return { productState, onChangeInput, onSubmitProduct };
}
