import React, { useState } from "react";
import OtpVerific from "./OtpVerific";
import logo from "../../assets/img/logo.svg";
import { login } from "../../services/apiservices";
import validator from "validator";
import { Button } from "bootstrap";
const Login = () => {
  const [otpVeri, setOtpVeri] = useState(false);
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  const verificationOtp = async () => {
    if (!email) {
      setEmail("Enter your email");
      setShow(true);
    } else {
      if (validator.isEmail(email)) {
        setOtpVeri(true);

        if (email) {
          console.log("am call");
          const res = await login(email);
          console.log("RES : ", res.success);
          if (res.success) {
            setOtpVeri(true);
          } else {
            console.log("otp send failed");
          }
        }
      } else {
        setEmail("Enter a valid email");
        setShow(true);
      }
    }
  };

  const demoFunc = () => {
    setOtpVeri(false);
  };

  const handleChange = (e) => {
    setShow(false);
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
          <div className="justify-content-center">
            <div className="card o-hidden border-0 shadow-lg">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 bg-login-image">
                    <img src={logo} alt="logo" className="logo" />
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
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={handleChange}
                          />
                          {show ? (
                            <span
                              style={{
                                fontWeight: "bold",
                                color: "red",
                              }}
                            >
                              {email}
                            </span>
                          ) : (
                            ""
                          )}
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
      ) : (
        <OtpVerific
          uEmail={email}
          verificationOtp={verificationOtp}
          demoFunc={demoFunc}
        />
      )}
    </>
  );
};

export default Login;
