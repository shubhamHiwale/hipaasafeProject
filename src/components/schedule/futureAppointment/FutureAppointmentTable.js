import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { getClassNamePrefix } from "rsuite/esm/utils";
import Patient from "../../DrawerField/Patient";
import { modifyAppo } from "../../../services/apiservices";
import moment from "moment";

const FutureAppointmentTable = ({
  demoFunc,selectedDoctor,AppContext,
  appointMentList,
  chnageStatusAPICall,
}) => {
  console.log("appointMentList : ", appointMentList);
  const toggleDrawer2 = (e) => {
    demoFunc("patient", e);
  };

  const reqModifyAppo = async (e) => {
    const a_id = e.target.id;
    const a_val = e.target.value;
    const a_datetime = e.target.name;
    const res = await modifyAppo({
      appointment_id: a_id,
      appointment_date: a_datetime.split("@")[0],
      appointment_time:
        a_datetime.split("@")[1].split(":")[0] +
        ":" +
        a_datetime.split("@")[1].split(":")[2],
      type: a_val,
    });
    if (res) {
      console.log(res);
    }
  };

  const getClassName = (appointment_status) => {
    switch (appointment_status) {
      case "CONFIRMED":
        return "success";

      case "RESCHEDULED":
        return "primary";

      case "PENDING":
        return "warning";

      case "CANCELLED":
        return "danger disabled";

      case "REMINDER":
        return "primary";

      case "NEXT_IN_Q":
        return "danger disabled";

      case "COMPLETED":
        return "outline-info";

      default:
        return "outline-primary";
    }
  };

  return (
    <>
      <div className="col-12">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <div className="mb-2">
                <span className="font-weight-bold">
                {/* {AppContext?.user?.role_id === 4
                     ? selectedDoctor?.name :    "Patients List"
                  } */}
                  Patients List
                  </span>
              </div>
              <Table
                className="table text-sm-start"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr className="bg-th">
                    <th>Queue No.</th>
                    <th>Patient Name</th>
                    <th>Age</th>
                    <th>Time</th>
                    <th>Phone</th>
                    <th>Appointment</th>
                  </tr>
                </thead>
                <tbody>
                  {appointMentList &&
                    appointMentList.map((e, i) => {
                      let {
                        id,
                        queue_no,
                        appointment_date,
                        appointment_id,
                        appointment_time,
                        appointment_status,
                        patient_details: { uid, age, name, mobile },
                      } = e;
                      return (
                        <tr>
                          <td>{queue_no}</td>
                          <td
                            id={uid}
                            className="patient"
                            onClick={() => toggleDrawer2(e)}
                          >
                            {name}
                          </td>
                          {/* <td
                            id={uid}
                            className="patient"
                            onClick={toggleDrawer2}
                          >
                            {name}
                          </td> */}
                          <td>{age}</td>

                          <td>{appointment_time}</td>
                          <td>{mobile}</td>
                          <td>
                            <Button
                              className="btn-status rounded-pill"
                              variant={getClassName(appointment_status)}
                              onClick={() => { chnageStatusAPICall( appointment_id, appointment_status, appointment_time,appointment_date);}}
                            >
                              {appointment_status === "PENDING"
                                ? "Take confirmation"
                                : appointment_status === "NEXT_IN_Q"
                                ? "Mark as a complete"
                                : appointment_status === "REMINDER"
                                ? "Confirmation Send"
                                : appointment_status === "CONFIRMED"
                                ? "Waiting"
                                : appointment_status}
                            </Button>
                            {/* <Button
                              onClick={reqModifyAppo}
                              variant="outline-info"
                              id={appointment_id}
                              value={
                                appointment_status === "PENDING"
                                  ? "NOTIFY_CONFIRMATION"
                                  : ""
                              }
                              name={appointment_date + "@" + appointment_time}
                            >
                              {appointment_status === "PENDING"
                                ? "Take confirmation"
                                : appointment_status === "CONFIRMED"
                                ? "Mark as a complete"
                                : "Rescheduled"}
                            </Button> */}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureAppointmentTable;
