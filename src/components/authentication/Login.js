import React, { useState } from "react";
import OtpVerific from "./OtpVerific";
import { useSelector } from "react-redux";
import logo from "../../assets/img/logo.svg";

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
        <div className="loginblock">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="card o-hidden border-0 shadow-lg">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6 bg-login-image">
                        <img src={logo} alt="logo" className="logo"/>
                      </div>
                      <div className="col-lg-6 login-form">
                        <div className="login-form-content">
                          <div className="text-center">
                            <h1 className="title">Login</h1>
                            <p>Welcome Back</p>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="email" className="form-control form-control-user" id="exampleInputEmail"
                                aria-describedby="emailHelp"
                                placeholder="Enter Email Address..."
                                onChange={handleChange}
                              />
                            </div>

                            <a
                              onClick={verificationOtp}
                              className="btn btn-primary btn-user btn-block"
                            >
                              Continue
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
