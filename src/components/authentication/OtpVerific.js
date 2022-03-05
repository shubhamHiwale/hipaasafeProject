import React from "react";

const OtpVerific = ({ demoFunc, uEmail }) => {
  const verificationOtp = () => {
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
                          <a className="small" href="forgot-password.html">
                            Enter 4 digit OTP sent to
                          </a>
                        </div>
                        <div className="text-center mb-2">
                          <a className="small" href="register.html">
                            {uEmail}
                          </a>
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
                            <a className="small" href="forgot-password.html">
                              &#x278A;<b>3:00</b>
                            </a>
                          </div>
                          <div className="text-center mb-2">
                            <a className="small">
                              Didn't received the otp?
                              <b>
                                <span
                                  style={{ cursor: "pointer" }}
                                  onClick={verificationOtp}
                                >
                                  Resend OTP
                                </span>
                              </b>
                            </a>
                          </div>

                          <a
                            href="index.html"
                            className="btn btn-primary btn-user btn-block"
                          >
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
