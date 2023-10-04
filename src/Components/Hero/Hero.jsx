import React, { useEffect, useState } from "react";
import Header from "../Navbar/Header";
import { banner } from "../../Api/coustomapi";
import { BsDot } from "react-icons/bs";
import "../Hero/hero.css";


const Hero = () => {
  const [slide, setSlide] = useState([]);
  const [num, setNum] = useState(0);
  const [loading,setLoading] = useState(true);
  


const sliderfetching=async()=>{
    const data=await fetch('https://supershop.cyclic.cloud/api/slideone')
    const res=await data.json();
    setSlide(res)
   
}
  useEffect(()=>{
    sliderfetching()

    setTimeout(()=>{
    setLoading(false)
    },4000)
    

  },[])

  return (
    <>
      <Header />
      {
        loading?<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}><h6 style={{marginTop:'25%',color:'red'}}>please wait!Data is Loading......</h6></div>:<div className="hero">
        <div
          style={{
            width: "100%",
            height: "70vh",
            background: `url(${slide[num].url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition:"center",
            transition: "all .5s linear",
          }}
        ></div>
        <div className="icons_group">
          <div className="icons">
            <BsDot className="icon" onClick={() => setNum(0)} />
          </div>
          <div className="icons">
            <BsDot className="icon" onClick={() => setNum(1)} />
          </div>
          <div className="icons">
            <BsDot className="icon" onClick={() => setNum(2)} />
          </div>
          <div className="icons">
            <BsDot className="icon" onClick={() => setNum(3)} />
          </div>
        </div>
      </div>
      }
      {/* <div style={{height:'100vh',background:'pink'}}></div>
      <div style={{height:'100vh',background:'green'}}></div> */}
    </>
  );
};

export default Hero;
//${slide[num].url}
