import React from "react";
import { Table } from "react-bootstrap";

const PatientsList = () => {
  return (
    <>
      <div className="card shadow mb-4">
        <div className="py-2">
          <h6 className="m-0 font-weight-bold">Patients List</h6>
        </div>
        <div className="card-body">
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
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#0098FF" }}
                      className="btn btn-primary w-100 d-inline-block rounded"
                    >
                      Mark Complete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light w-100 d-inline-block rounded"
                    >
                      Waiting
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success w-100 d-inline-block rounded"
                    >
                      Completed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#0098FF" }}
                      className="btn btn-primary w-100 d-inline-block rounded"
                    >
                      Mark Complete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light w-100 d-inline-block rounded"
                    >
                      Waiting
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success w-100 d-inline-block rounded"
                    >
                      Completed
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>Edinburgh</td>
                  <td>61</td>
                  <td>2011/04/25</td>
                  <td>
                    <button
                      style={{ backgroundColor: "#0098FF" }}
                      className="btn btn-primary w-100 d-inline-block rounded"
                    >
                      Mark Complete
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>2011/07/25</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-light w-100 d-inline-block rounded"
                    >
                      Waiting
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>2009/01/12</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-success w-100 d-inline-block rounded"
                    >
                      Completed
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsList;
