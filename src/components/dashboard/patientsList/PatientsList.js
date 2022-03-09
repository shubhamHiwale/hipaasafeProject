import React, { useEffect, useState, useContext } from "react";
import { Table } from "react-bootstrap";
import { GetPatients } from '../../../services/apiservices'
import appContext from "../../../context/appcontext/AppContext";

const PatientsList = () => {
  const AppContext = useContext(appContext);
  const [patients, setPatients] = useState(null);
  useEffect(() => {
    GetAPI()
  }, [])

  const GetAPI = async () => {
    let res1 = await GetPatients();
    if (res1?.success) {
      setPatients(res1?.data?.rows);
    }
  }

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
                        <td>Tiger Nixon</td>
                        <td>System Architect</td>
                        <td>Edinburgh</td>
                        <td>61</td>
                        <td>2011/04/25</td>
                        <td>
                          <button
                            style={{ backgroundColor: "#0098FF" }}
                            className="btn btn-primary px-4 rounded-pill"
                          >
                            Mark Complete
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
