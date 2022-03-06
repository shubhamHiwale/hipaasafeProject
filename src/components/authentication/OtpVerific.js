import React, { useState } from "react";
import Countdown from "react-countdown";
import Timer from "../../helper/Timer";
import logo from "../../assets/img/logo.svg";
import { useHistory } from "react-router-dom";
import { otpVerification } from "../../services/apis/loginAuth";
import { useSelector, useDispatch } from "react-redux";
import { sideBarAuth, timeUp } from "../../redux/actions/actions";

const OtpVerific = ({ demoFunc, uEmail, verificationOtp }) => {
  const dispatch = useDispatch();
  const tm = useSelector((state) => state.timeUpReducer);
  console.log("tm : ", tm);
  const [otp, setOtp] = useState();
  const [otpAuth, setotpAuth] = useState(false);

  const histroy = useHistory();
  const editEmail = () => {
    demoFunc();
  };

  const reSendOtp = () => {
    verificationOtp();
    dispatch(timeUp(true));
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
    setotpAuth(false);
  };

  const verifyOtp = async () => {
    if (uEmail && otp) {
      const res = await otpVerification(uEmail, otp);
      if (res) {
        if (res.success) {
          if (res.data.role_name === "SUPPORT") {
            console.log("otp verification Data : ", res);
            dispatch(sideBarAuth(true));
            histroy.push("/main/support-dashboard");
          }
        } else {
          histroy.push("/main/dashboard");
        }
        console.log("res : ", res);
      }
    } else {
      console.log("somthing is missing");
      setotpAuth(true);
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
                  <div className="login-form-content otp-form">
                    <div className="text-center">
                      <h1 className="title">OTP VERIFICATION</h1>
                      <p>Enter 4 digit OTP sent to</p>
                    </div>
                    <div className="text-center mb-2">                      
                      <button onClick={editEmail} className="btn btn-pencil">
                        <span className="small">{uEmail}</span>
                        <i class="fa fa-pencil" aria-hidden="true"></i>
                      </button>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter OTP..."
                          onChange={handleChange}
                        />
                      </div>
                      {otpAuth ? (
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "red",
                          }}
                        >
                          Please Enter a OTP
                        </span>
                      ) : (
                        ""
                      )}
                      <div className="text-center m-0 p-3">
                        <div className="small">
                          <b>
                            {/* <Countdown date={Date.now() + 100000} /> */}
                            <Timer seconds={10} />
                          </b>
                        </div>
                      </div>
                      <div className="text-center mb-4 p-3">
                        Didn't received the otp?
                        <b className="small">
                          <span
                            onClick={reSendOtp}
                            className={!tm ? "disable-otp" : "enable-otp"}
                            style={{ cursor: "pointer" }}
                          >
                            Resend OTP
                          </span>
                        </b>
                      </div>
                      <a
                        onClick={verifyOtp}
                        className="btn btn-primary btn-user btn-block"
                      >
                        Verify
                      </a>
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
