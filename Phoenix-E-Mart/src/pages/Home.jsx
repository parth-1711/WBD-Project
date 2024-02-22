import {
  MyComponent,
  Categories,
  Corousel,
  Recommendations,
} from "../components/HomePage_components";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Home = () => {
    const navigate=useNavigate();
  const user = useSelector((state) => state.auth);
//   console.log(user);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8000/getAllProducts", {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      // console.log(data.products);
      if(response.status==403){
        toast.error('Make Sure You are logged in',{position:"top-center"});
        navigate('/login')
      }
      else setProductList(data.products);
      // return data;
    };
    fetchProducts();
  }, []);

  // productList
  // console.log(productList);
  return (
    <div>
      <MyComponent />
      <Categories />
      <Corousel />
      <Recommendations productList={productList} />
    </div>
  );
};
export default Home;
