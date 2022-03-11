import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { getClassNamePrefix } from "rsuite/esm/utils";
import Patient from "../../DrawerField/Patient";

const FutureAppointmentTable = ({ demoFunc, appointMentList, chnageStatusAPICall }) => {
  const toggleDrawer2 = () => {
    demoFunc("patient");
  };


  const getClassName = (appointment_status) => {

    switch (appointment_status) {
      case 'CONFIRMED':
        return "success"

      case 'RESCHEDULED':
        return "primary"

      case 'PENDING':
        return "light"

      case 'CANCELLED':
        return "danger disabled"

      case 'SCHEDULED':
        return "outline-info"

      default:
        return "outline-primary"
    }


  }
  return (
    <>
      <div className="col-12">
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <div className="mb-2">
                <span className="font-weight-bold">
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
                  {appointMentList && appointMentList.map((e, i) => {
                    let { id, appointment_date, appointment_id, appointment_time, appointment_status, patient_details: { age, name, mobile } } = e;
                    return (<tr>
                      <td>{id}</td>
                      <td className="patient" onClick={toggleDrawer2}>
                        {name}
                      </td>
                      <td>{age}</td>

                      <td>{appointment_time}</td>
                      <td>{mobile}</td>
                      <td>
                        <Button className="btn-status rounded-pill" variant={getClassName(appointment_status)} onClick={() => { chnageStatusAPICall(appointment_id, appointment_status) }} >{appointment_status}</Button>
                      </td>
                    </tr>)
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