import React from "react";
import Countdown from "react-countdown";
import Timer from "../../helper/Timer";

const OtpVerific = ({ demoFunc, uEmail }) => {
  const editEmail = () => {
    demoFunc();
  };

  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div
        style={style}
        className="d-flex justify-content-center align-item-center bg-gradient-primary w-100 d-inline-block"
      >
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
                          <h1 className="h4 text-gray-900 mb-0">
                            OTP VERIFICATION
                          </h1>
                        </div>
                        <div className="text-center m-0">
                          <a className="small">Enter 4 digit OTP sent to</a>
                        </div>
                        <div className="text-center mb-2">
                          <a className="small">{uEmail}</a>{" "}
                          <button
                            onClick={editEmail}
                            className="btn btn-sm bg-success text-white"
                          >
                            {"<-"}
                          </button>
                        </div>
                        <form className="user">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                            />
                          </div>

                          <div className="text-center m-0">
                            <a className="small">
                              <b>
                                {/* <Countdown date={Date.now() + 100000} /> */}
                                <Timer minutes={1} seconds={30} />
                              </b>
                            </a>
                          </div>
                          <div className="text-center mb-2">
                            <a className="small">
                              Didn't received the otp?
                              <b>
                                <span style={{ cursor: "pointer" }}>
                                  Resend OTP
                                </span>
                              </b>
                            </a>
                          </div>

                          <a className="btn btn-primary btn-user btn-block">
                            Login
                          </a>
                        </form>
                        <hr />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpVerific;
