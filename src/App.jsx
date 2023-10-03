import { Route, Routes } from "react-router-dom";

import Myhome from "./pages/Myhome";
import Product from "./pages/Product";
import Deshbord from "./pages/Deshbord";
import Topdesh from "./Components/Top_pro_deshbord/Topdesh";
import Sliderdesh from "./Components/Slider_deshbord/Sliderdesh";
import { useState } from "react";

function App() {
  const[loading,setLoading]=useState(true)
  setTimeout(()=>{
    setLoading(false)
  },4000)
  return (
    <>
    {
      loading?<div><h1 className="text-center mt-5">please wait a few mint....</h1></div>:<div>
      <Routes>
        <Route path="/" element={<Myhome />} />
        <Route path="/product" element={<Product />} />
        <Route path="/deshbord" element={<Deshbord />}>
          <Route path="topdesh" element={<Topdesh/>} />
          <Route path="sliderdesh" element={<Sliderdesh/>} />
        </Route>
      </Routes>
    </div>
    }
      
    </>
  );
}

export default App;
