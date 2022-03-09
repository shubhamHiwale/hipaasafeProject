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
      setDoctors(res?.data?.rows);
      console.log(res?.data?.rows);
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
                {doctors?.map((i, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i?.name}</td>
                    <td>{i?.doctor_details?.speciality?.title}</td>
                    <td>{i?.doctor_details?.experience}</td>
                    <td>{i?.country_code} {i?.number}</td>
                    <td>
                      <Button variant="outline-primary btn-edit">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorTable;
