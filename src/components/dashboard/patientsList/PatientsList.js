import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { GetPatients } from '../../../services/apiservices'
import appContext from "../../../context/appcontext/AppContext";

const PatientsList = ({ patients }) => {
  return (
    <>
      <div className="col-12">
        <div className="card shadow">
          <div className="card-body">
            <div className="mb-4">
              <div className="py-2">
                <h6 className="mb-2 font-weight-bold">Patients List</h6>
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
                          <button
                            style={{ backgroundColor: "#0098FF" }}
                            className="btn btn-primary px-4 rounded-pill"
                          >
                            {i?.appointment_status}
                          </button>
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
