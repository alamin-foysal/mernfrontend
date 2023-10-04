import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Topdesh = () => {
  let input_1 = useRef();
  let input_2 = useRef();
  let input_3 = useRef();
  let input_4 = useRef();
  let input_5 = useRef();
  const [slidef, setSlidef] = useState({
    url: "",
    productsId: "",
    price: "",
    title: "",
    details: "",
  });

  function handleinput(e) {
    const { name, value } = e.target;
    setSlidef((prev) => ({ ...prev, [name]: value }));
  }

  function formsubmit(e) {
    e.preventDefault();

    input_1.current.value = "";
    input_2.current.value = "";
    input_3.current.value = "";
    input_4.current.value = "";
    input_5.current.value = "";

    fetch("https://supershop.cyclic.cloud/api/top-product", {
      method: "POST",
      body: JSON.stringify(slidef),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        toast.success("🦄 WOW You are Successful!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row">
            <mark className="text-center">Setting in your Top products</mark>
              <div className="col-12 bg-success my-5">
                <form className="my-5 p-5" onSubmit={formsubmit}>
                  <div className="mb-3">
                    <label className="form-label">Product Id :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="productsId"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_1}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Title :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="title"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_2}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Product Price :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="price"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_3}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Image url :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="url"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_4}
                    />
                    <div id="emailHelp" className="form-text">
                      please type any image url
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Product Details</label>
                    <input
                      type="text"
                      className="form-control"
                      name="details"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_5}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary mt-5">
                    Submit
                  </button>
                </form>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topdesh;
