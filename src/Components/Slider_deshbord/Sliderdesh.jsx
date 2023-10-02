import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sliderdesh = () => {
  const [slidef, setSlidef] = useState({
    url: "",
    id: "",
  });
  let input_1 = useRef();
  let input_2 = useRef();

  function handleinput(e) {
    // setSlidef((prev)=>({...prev,[propty]:value}))
    // const name=e.target.name
    // const value=e.target.value
    const { name, value } = e.target;
    setSlidef((prev) => ({ ...prev, [name]: value }));

    // console.log(value)
  }

  function formsubmit(e) {
    e.preventDefault();

    input_1.current.value = "";
    input_2.current.value = "";

    //fetch("http://localhost:4000/api/slideone", {
      
      fetch("https://adda4000.cyclic.cloud/api/slideone",{
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
              <mark className="text-center">Setting in your Slider</mark>
              <div className="col-12 bg-success my-5">
                <form className="my-5 p-5" onSubmit={formsubmit}>
                  <div className="mb-3">
                    <label className="form-label">Image url :</label>
                    <input
                      type="text"
                      className="form-control"
                      name="url"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_1}
                    />
                    <div id="emailHelp" className="form-text">
                      please type any url
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Image Id
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      onChange={handleinput}
                      required
                      autoComplete="off"
                      ref={input_2}
                    />
                    <div id="emailHelp" className="form-text">
                      please type any number.
                    </div>
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

export default Sliderdesh;
