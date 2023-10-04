import React, { useEffect, useState } from "react";
// import { top_products } from "../../Api/coustomapi";
import "./Topproducts.css";

const Topproducts = () => {
  const [top, setTop] = useState([]);
  const [loading, setLoading] = useState(true);

  const topprodfetc = async () => {
    //const data = await fetch("http://localhost:4000/api/top-product");
    const data = await fetch("https://supershop.cyclic.cloud/api/top-product");
    const res = await data.json();
    setTop(res);
  };

  useEffect(() => {
    topprodfetc();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h6 style={{ marginTop: "25%", color: "red" }}>
            please wait!Data is Loading......
          </h6>
        </div>
      ) : (
        <div className="container-fluid">
          <h1
            style={{ textAlign: "center", margin: "3rem 0rem", color: "pink" }}
          >
            Our Top <mark>Product</mark>
          </h1>
          <div className="row">
            {top.map((item) => {
              const { price, url, productsId, title, details, _id } = item;
              return (
                <>
                  <div className="col-12 col-sm-2 mx-auto">
                    <div className="card my-1"key={productsId}>
                      <img src={url} className="card-img-top" alt="product" />
                      <div className="card-body">
                        <h3 className="card-title">product Id:{productsId}</h3>
                        <h6 className="card-title">Price:{price}</h6>
                        <h2 className="card-title">{title.length>10?title.slice(0,9)+'.....': title}</h2>

                        <p className="card-text">{details}</p>

                        <a href="#" className="btn btn-primary">
                          Go somewhere
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
       
      {/* <div className="row ">
        <div className="col-6 bg-success mx-auto">sdfajfj;jj</div>
        <div className="col-6 bg-info mx-auto">chsfvashdfhs;fahs</div>
        <div className="col-4 bg-warning mx-auto">chsfvashdfhs;fahs</div> 
      </div> */}
    </>
  );
};

export default Topproducts;
//style={{ width: "19rem" }}
