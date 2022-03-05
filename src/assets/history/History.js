import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import DatePicker from "react-date-picker";

const History = () => {
  const [startValue, startDate] = useState(new Date());
  const [endValue, endDate] = useState(new Date());

  return (
    <>
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-2">
          <span class="font-weight-bold mb-0 text-gray-800">
            Appointment History
          </span>
          <div className="d-flex align-items-center">
            <Form className="mt-4">
              <Row>
                <Col className="col-sm-16 mb-4">
                  <Form.Control className="p-4" placeholder="First name" />
                </Col>
              </Row>
            </Form>
            <div className="d-flex ml-4">
              <DatePicker onChange={startDate} value={startValue} />
              <div className="p-2">TO</div>
              <DatePicker onChange={endDate} value={endValue} />
            </div>
          </div>
        </div>
        {/* <div class="d-sm-flex align-items-center justify-content-between mb-1">
          <span class="font-weight-bold mb-0 text-gray-800">
            <Form className="mt-4">
              <Row>
                <Col className="col-sm-16 mb-4">
                  <Form.Control className="p-4" placeholder="First name" />
                </Col>
              </Row>
            </Form>
          </span>
          <Button>Create an Appointment</Button>
        </div> */}

        <Form className="mt-4 px-5">
          <div>
            <span className="font-weight-bold text-primary">1 Feb</span>
          </div>
          <Row className="d-flex justify-content-between">
            <Col className="col-sm-5 mb-4 bg-white p-2 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2  border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
          </Row>
        </Form>

        <Form className="mt-4 px-5">
          <div>
            <span className="font-weight-bold text-primary">2 Feb</span>
          </div>
          <Row className="d-flex justify-content-between">
            <Col className="col-sm-5 mb-4 bg-white p-2 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2  border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
            <Col className="col-sm-5 bg-white p-2 mb-4 m-2 border rounded">
              <div className="">
                <span>12:00 PM</span>
                <div className="d-flex justify-content-between">
                  <span>Sanjeev Arora</span>
                  <span>25 Yrs</span>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default History;
