import React from "react";
import { Button, Table } from "react-bootstrap";

const NurseTable = () => {
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
                <tr>
                  <td>1</td>
                  <td>Praveenkumar Motilal Maurya</td>
                  <td>26</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jessie Clarcson</td>
                  <td>12</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Praveenkumar Motilal Maurya</td>
                  <td>26</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jessie Clarcson</td>
                  <td>12</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Praveenkumar Motilal Maurya</td>
                  <td>26</td>
                  <td>+91 9876543210</td>
                  <td>
                    <Button variant="outline-primary btn-edit">Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Jessie Clarcson</td>
                  <td>12</td>
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

export default NurseTable;
