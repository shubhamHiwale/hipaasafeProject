import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DatePicker from "react-date-picker";

const History = () => {
  const [startValue, startDate] = useState(new Date());
  const [endValue, endDate] = useState(new Date());

  return (
    <>
      <div className="container-fluid">
        <div className="d-sm-flex align-items-center justify-content-between mb-2">
          <span className="page-title">Appointment History</span>
          <div className="d-flex align-items-center">
            <Form className="">
              <Row>
                <div className="col-sm-12">
                  <Form.Control className="p-4" placeholder="First name" />
                </div>
              </Row>
            </Form>
            <div className="d-flex ml-4">
              <DatePicker onChange={startDate} value={startValue} />
              <div className="p-2">TO</div>
              <DatePicker onChange={endDate} value={endValue} />
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-body">
            {/* date block */}
            <div className="date-block">            
              <p className="font-weight-bold text-primary mb-1">1 Feb</p>              
              <div className="row">                                  
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
              </div>                
            </div>            

            <div className="date-block">            
              <p className="font-weight-bold text-primary mb-1">2 Feb</p>              
              <div className="row">                                  
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="border rounded p-2 mb-2">
                    <span>12:00 PM</span>
                    <div className="d-flex justify-content-between">
                      <span>Sanjeev Arora</span>
                      <span>25 Yrs</span>
                    </div>
                  </div>
                </div>
              </div>                
            </div>            
          </div>
        </div>
      </div>
    </>
  );
};

export default History;
