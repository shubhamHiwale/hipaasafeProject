import React from "react";
import { Form, Row, Col, Button, InputGroup, FormControl, FloatingLabel } from "react-bootstrap";

const AddDoctor = () => {
  return (
    <>
      <div className="container-fluid d-flex flex-column">
        <div classname="row">
            <div className="col-lg-10 col-sm-12">          
              <div className="page-title">Add Doctor</div>
              <Form className="mt-4">
                <Row>
                  <Col className="col-sm-4  mb-4">
                    <InputGroup className="input-group-floting">
                      <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                      <FloatingLabel label="Name">
                        <Form.Control type="text" className="p-4" placeholder="Name" />
                      </FloatingLabel>
                    </InputGroup>
                  </Col>
                  <Col className="col-sm-4  mb-4">
                      <InputGroup className="input-group-floting">
                      <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                      <FloatingLabel label="Email">
                        <Form.Control type="email" className="p-4" placeholder="Email" />
                      </FloatingLabel>
                    </InputGroup>                    
                  </Col>
                  <Col className="col-sm-4  mb-4">
                      <InputGroup className="input-group-floting">
                      <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                      <FloatingLabel label="Mobile Number">
                        <Form.Control type="tel" className="p-4" placeholder="Mobile Number" />
                      </FloatingLabel>                        
                    </InputGroup>
                  </Col>
                  <Col className="col-sm-4  mb-4">
                    <InputGroup className="input-group-floting">
                      <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                      <FloatingLabel label="City">
                        <Form.Control type="text" className="p-4" placeholder="City" />
                      </FloatingLabel>                        
                    </InputGroup>                   
                  </Col>
                  
                  <Col className="col-sm-4  mb-4">
                      <InputGroup className="input-group-floting">
                      <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Select className="custom-selectbox" aria-label="Select Speciality">
                          <option>Speciality</option>
                          <option value="1">Cardiologist</option>
                          <option value="2">Radiologist</option>
                          <option value="3">Neurologist</option>
                          <option value="4">Dentist</option>
                        </Form.Select>
                    </InputGroup>                                      
                  </Col>
                  <Col className="col-sm-4 mb-4">
                      <InputGroup className="input-group-floting">
                      <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                      <Form.Select className="custom-multiselectbox" aria-label="Select Tags">
                          <option>Tags</option>
                          <option value="1">Cardiologist</option>
                          <option value="2">Radiologist</option>
                          <option value="3">Neurologist</option>
                          <option value="4">Dentist</option>
                        </Form.Select>
                    </InputGroup>                                      
                  </Col>
                  <Col className="col-sm-4  mb-4">
                      <InputGroup className="input-group-floting">
                    <InputGroup.Text><i class="fa fa-user-o" aria-hidden="true"></i></InputGroup.Text>
                      <FloatingLabel label="Year of experience">
                        <Form.Control type="text" className="p-4" placeholder="Year of experience" />
                      </FloatingLabel>
                    </InputGroup>                                      
                  </Col>
                </Row>
              </Form>

              <Form className="mt-4">
                <Row>
                  <Col className="col-sm-4  mb-4 mb-4">
                    <Button className="w-100" variant="primary">Add Doctor</Button>
                  </Col>
                </Row>
              </Form>
            </div>
        </div>
      </div>
    </>
  );
};

export default AddDoctor;
