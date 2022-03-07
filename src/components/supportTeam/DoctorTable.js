import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getDoctors } from '../../services/apiservices'

const DoctorTable = () => {

  const [doctors, setDoctors] = useState(null);
  useEffect(() => {
    getDoctorsAPI()
  }, [])

  const getDoctorsAPI = async () => {
    let res = await getDoctors();
    if (res?.success) {
      setDoctors(res?.data?.docs);
    }
  }

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            {/* <span>doctor table</span> */}
            <Table
              className="table text-sm-start"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr className="bg-th">
                  <th>Sr. No.</th>
                  <th>Doctors Name</th>
                  <th>Specialty</th>
                  <th>Yrs Of Erp.</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Dr. Praveenkumar Motilal Maurya</td>
                  <td>Cardiologist</td>
                  <td>10</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. Jessie Clarcson</td>
                  <td>Orthopedic</td>
                  <td>11</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dr. Praveenkumar Motilal Maurya</td>
                  <td>Cardiologist</td>
                  <td>10</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dr. Jessie Clarcson</td>
                  <td>Orthopedic</td>
                  <td>11</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Dr. Praveenkumar Motilal Maurya</td>
                  <td>Cardiologist</td>
                  <td>10</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Dr. Jessie Clarcson</td>
                  <td>Orthopedic</td>
                  <td>11</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
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

export default DoctorTable;
