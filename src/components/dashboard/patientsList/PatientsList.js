import React, { useEffect, useState, useContext } from "react";
import { Table,Button } from "react-bootstrap";
import { GetPatients } from '../../../services/apiservices'
import appContext from "../../../context/appcontext/AppContext";


const PatientsList = ({ patients,chnageStatusAPICall ,AppContext, selectedDoctor}) => {

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
        <div className="card shadow">
          <div className="card-body">
            <div className="mb-4">
              <div className="py-2">
                <h6 className="mb-2 font-weight-bold">
                  {AppContext?.user?.role_id === 4
                     ? selectedDoctor?.name + " Patient List" :    "Patients List"
                  }
                  </h6>
              </div>
              <div className="table-responsive">
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
                      <th>Checkup</th>
                    </tr>
                  </thead>
                  <tbody>

                    {patients?.map((i, index) => (
                      <tr>
                        <td>{i?.queue_no}</td>
                        <td>{i?.patient_details?.name}</td>
                        <td>{i?.patient_details?.age}</td>
                        <td>{i?.appointment_time}</td>
                        <td>{i?.patient_details?.mobile}</td>
                        <td>
                          <Button
                              className="btn-status rounded-pill"
                              variant={getClassName(i?.appointment_status)}
                              onClick={() => { chnageStatusAPICall( i?.appointment_id, i?.appointment_status, i?.appointment_time,i?.appointment_date);}}
                            >
                              {i?.appointment_status === "PENDING"
                                ? "Take confirmation"
                                : i?.appointment_status === "NEXT_IN_Q"
                                ? "Mark as a complete"
                                : i?.appointment_status === "REMINDER"
                                ? "Confirmation Send"
                                : i?.appointment_status === "CONFIRMED"
                                ? "Waiting"
                                : i?.appointment_status}
                            </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsList;
