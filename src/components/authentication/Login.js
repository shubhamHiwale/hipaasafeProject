import React, { useState } from "react";
import OtpVerific from "./OtpVerific";
import { useSelector } from "react-redux";

const Login = () => {
  const [otpVeri, setOtpVeri] = useState(false);
  const [email, setEmail] = useState("");

  const verificationOtp = () => {
    setOtpVeri(true);
  };

  const demoFunc = () => {
    setOtpVeri(false);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      {!otpVeri ? (
        <div style={style} className="bg-gradient-primary ">
          <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* <!-- Nested Row within Card Body --> */}
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Login</h1>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control form-control-user"
                                id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address..."
                                onChange={handleChange}
                              />
                            </div>

                            <a
                              onClick={verificationOtp}
                              className="btn btn-primary btn-user btn-block"
                            >
                              Login
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <OtpVerific uEmail={email} demoFunc={demoFunc} />
      )}
    </>
  );
};

export default Login;
