import React, { useEffect, useState, useContext } from "react";
import { Form, Row, Button, InputGroup } from "react-bootstrap";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DatePicker from "react-date-picker";
import appContext from "../../context/appcontext/AppContext";
import { getDoctors, getAppointmentHistory } from '../../services/apiservices'
import moment from "moment";

const History = () => {
  const [startValue, startDate] = useState(new Date('2020-03-01'));
  const [endValue, endDate] = useState(new Date('2025-03-15'));
  const [appointments, setAppointments] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [doctors, setDoctors] = useState(null);
  const AppContext = useContext(appContext);

  useEffect(() => {
    if (AppContext?.user?.role_id === 4) {
      getDoctorsAPI();
    } else {
      getAppointmentHistoryAPI(AppContext?.user?.uid, startValue, endValue);
      setSelectedDoctor(AppContext?.user?.uid);
    }
  }, [])

  const getDoctorsAPI = async () => {
    let res = await getDoctors();
    if (res?.success) {
      setDoctors(res?.data?.rows);
      getAppointmentHistoryAPI(res?.data?.rows[0].uid, startValue, endValue);
      setSelectedDoctor(res?.data?.rows[0].uid);
    }
  }

  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  const getAppointmentHistoryAPI = async (uid, from, to) => {
    let res = await getAppointmentHistory(uid, moment(from).format('YYYY-MM-DD'), moment(to).format('YYYY-MM-DD'));
    if (res?.success) {
      let data = groupBy(res?.data, 'date');
      console.log(data);
      setAppointments(data);
    }
  }

  const handleDoctorChanges = (e) => {
    setSelectedDoctor(e.target.value);
    getAppointmentHistoryAPI(e.target.value, startValue, endValue)
  };


  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-2">
          <span className="page-title">Appointment History</span>
          <div className="d-flex align-items-center">
            <Form className="">
              <Row>
                <div className="col-sm-12">
                  {doctors && <InputGroup className="input-group-floting">
                    <InputGroup.Text>
                      <i class="fa fa-user-o" aria-hidden="true"></i>
                    </InputGroup.Text>
                    <Form.Select
                      className="custom-selectbox"
                      aria-label="Select Speciality"
                      onChange={handleDoctorChanges}
                      name="speciality"
                      value={selectedDoctor}
                    >
                      {doctors?.map((dt, ind) => (
                        <>
                          <option value={dt.uid}>
                            {dt.name}
                          </option>
                        </>
                      ))
                      }
                    </Form.Select>
                  </InputGroup>}
                </div>
              </Row>
            </Form>
            <div className="d-flex ml-4">
              <DatePicker onChange={(e) => { startDate(e); getAppointmentHistoryAPI(selectedDoctor, e, endValue) }} value={startValue} />
              <div className="p-2">TO</div>
              <DatePicker onChange={(e) => { endDate(e); getAppointmentHistoryAPI(selectedDoctor, startValue, e) }} value={endValue} />
            </div>
          </div>
        </div>

        <div className="card history-card">
          <div className="card-body">
            {/* date block */}
            {appointments && Object.keys(appointments)?.map((ap) => {
              return (
                <div className="date-block">
                  <p className="font-weight-bold text-primary mb-1">{ap}</p>
                  <div className="row">
                    {appointments[ap][0]?.data?.map(u => (
                      <div className="col-sm-6">
                        <div className="border rounded p-2 px-4 mb-2">
                          <span>{u?.appointment_time}</span>
                          <div className="d-flex justify-content-between patient-details">
                            <span>{u?.patient_details?.name}</span>
                            <span>{u?.patient_details?.age} Yrs</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )

            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
