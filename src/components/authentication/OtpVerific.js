import React, { useState, useContext } from "react";
import Timer from "../../helper/Timer";
import logo from "../../assets/img/logo.svg";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sideBarAuth } from "../../redux/actions/actions";
import { validateOtp } from "../../services/apiservices";
import appContext from "../../context/appcontext/AppContext";

const OtpVerific = ({ demoFunc, uEmail, verificationOtp }) => {
  const dispatch = useDispatch();
  const AppContext = useContext(appContext);
  const tm = useSelector((state) => state.timeUpReducer);
  console.log("tm : ", tm);
  const [otp, setOtp] = useState();
  const histroy = useHistory();
  const editEmail = () => {
    demoFunc();
  };

  const reSendOtp = () => {
    verificationOtp();
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  const verifyOtp = async () => {
    if (uEmail && otp) {
      const res = await validateOtp({ email: uEmail, otp });
      if (res) {
        if (res.success) {
          sessionStorage.setItem("access_token", res?.data?.access_token);
          AppContext.setUser(res?.data);
          if (res.data.role_name === "SUPPORT") {
            dispatch(sideBarAuth(true));
            // histroy.push("/main/support-dashboard");
          }
        } else {
          // histroy.push("/main/dashboard");
        }
        console.log("res : ", res);
      }
    } else {
      console.log("somthing is missing");
    }
  };

  const style = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
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
                      <h1 className="title">OTP VERIFICATION</h1>
                      <p>Enter 4 digit OTP sent to</p>
                    </div>
                    <div className="text-center mb-2">
                      <a className="small">{uEmail}</a>
                      <button onClick={editEmail} className="btn">
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter OTP..."
                          onChange={handleChange}
                        />
                      </div>

                      <div className="text-center m-0">
                        <a className="small">
                          <b>
                            {/* <Countdown date={Date.now() + 100000} /> */}
                            <Timer seconds={10} />
                          </b>
                        </a>
                      </div>
                      <div className="text-center mb-2">
                        Didn't received the otp?
                        <b className="small">
                          <span onClick={reSendOtp} className={!tm ? "disable-otp" : "enable-otp"} style={{ cursor: "pointer" }}>
                            Resend OTP
                          </span>
                        </b>
                      </div>
                      <a onClick={verifyOtp} className="btn btn-primary btn-user btn-block">Done</a>
                    </form>
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
