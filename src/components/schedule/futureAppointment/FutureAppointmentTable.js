import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";

const FutureAppointmentTable = () => {
  return (
    <>
    <div className="col-12">      
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <div className="mb-2">
              <span className="font-weight-bold">
                Dr. Sanjeev Arora Patient List
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
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Praveenkumar Motilal Maurya</td>
                  <td>20</td>
                  <td>04:22 PM</td>
                  <td>+91 9876543210</td>
                  <td>
                  <button type="button" className="btn btn-success px-4 rounded-pill">Completed</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Praveenkumar Motilal Maurya</td>
                  <td>20</td>
                  <td>04:22 PM</td>
                  <td>+91 9876543210</td>
                  <td>
                  <button type="button" className="btn btn-primary px-4 rounded-pill">Mark Complete</button>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Praveenkumar Motilal Maurya</td>
                  <td>20</td>
                  <td>04:22 PM</td>
                  <td>+91 9876543210</td>
                  <td>
                  <button type="button" className="btn btn-light px-4 rounded-pill">Waiting</button>
                  </td>
                </tr>
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
