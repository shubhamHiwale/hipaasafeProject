import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form, Row, Col } from "react-bootstrap";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Patient from "../../DrawerField/Patient";

const FutureAppointmentTable = ({ demoFunc }) => {
  const toggleDrawer2 = () => {
    demoFunc("patient");
  };
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
                    <td>Tiger Nixon</td>
                    <td className="patient" onClick={toggleDrawer2}>
                      System Architect
                    </td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>
                      <Button variant="outline-info">Edit</Button>
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
