import React, { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./routes/components/Header";
import Footer from "./routes/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import SummaryApi from "./common";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {
  
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();
    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data));
    }

  }

  const fetchUserAddToCart =  async() => {
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url, {
      method: SummaryApi.addToCartProductCount.method,
      credentials: "include",
    });
    const dataApi = await dataResponse.json();

    console.log("dataApi", dataApi);
    setCartProductCount(dataApi?.data?.count)
  } 
  
  useEffect(() => {
    {/**user details */}
    fetchUserDetails();
      {/**user details  cart product*/}
    fetchUserAddToCart()


  }, []);
  
  return (
    <>
      <Context.Provider value={{
        fetchUserDetails, // user detail fetch
        cartProductCount, // current user add to cart product count 
        fetchUserAddToCart
      }}>
        <ToastContainer
        position="top-center"
        />

        <Header />
        <main className="min-h-[calc(100vh-120px)] pt-16">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App