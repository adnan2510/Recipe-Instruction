import { useEffect } from "react";
import axios from "../utils/axios";

const Home = () => {
  const getProduct = async () => {
    try {
      // Axios example
      const { data } = await axios.get("/products/");
      console.log(data);

      //Fecth API example
      // const strdata = await fetch("https://fakestoreapi.com/products/1");
      // const data = await strdata.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
   
    getProduct();
   
  }, []); //[] --> Run when component Updated. If Dependency Array is not Present then the component will be rendered (Deleted and Created) else it will be Updated changes only in the view


  return (
    <div>
      <h1>Home</h1>
      <button onClick={getProduct}>Get Product</button>
    </div>
  );
};

export default Home;
