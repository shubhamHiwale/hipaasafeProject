import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Patient from "../../DrawerField/Patient";
import { modifyAppo } from "../../../services/apiservices";
import moment from "moment";

const FutureAppointmentTable = ({ demoFunc, appointMentList }) => {
  console.log("appointMentList : ", appointMentList);
  const toggleDrawer2 = (e) => {
    demoFunc("patient", e.target.id);
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

  return (
    <>
      <div className="col-12">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <div className="mb-2">
                <span className="font-weight-bold">Patients List</span>
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
                        appointment_date,
                        appointment_time,
                        appointment_status,
                        appointment_id,
                        patient_details: { uid, age, name, mobile },
                      } = e;
                      return (
                        <tr>
                          <td>{id}</td>
                          <td
                            id={uid}
                            className="patient"
                            onClick={toggleDrawer2}
                          >
                            {name}
                          </td>
                          <td>{age}</td>
                          <td>{appointment_date}</td>
                          <td>{appointment_time}</td>
                          <td>
                            <Button
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
                            </Button>
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
