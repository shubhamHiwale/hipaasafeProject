import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getNurses } from '../../services/apiservices'

const NurseTable = () => {

  const [nurses, setNurses] = useState(null);
  useEffect(() => {
    getNurseAPI()
  }, [])

  const getNurseAPI = async () => {
    let res = await getNurses();
    if (res?.success) {
      setNurses(res?.data?.rows);
    }
  }

  return (
    <>
      <div className="card shadow mb-4">
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
                  <th>Sr. No.</th>
                  <th>Nurse Name</th>
                  <th>Yrs Of Erp.</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {nurses?.map((i, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i?.name}</td>
                    <td>{i?.exp}</td>
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

export default NurseTable;
