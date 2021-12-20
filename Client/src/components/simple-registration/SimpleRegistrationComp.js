//A component that creates a connection form for business customers and non-business customers

import {Form,Button,Row,Col,InputGroup } from 'react-bootstrap';
import validateSimpleRegistration from '../../helpers/simpleRegistrationHelper';
import {  toast } from 'react-toastify';

const notify = (message) => toast(message);

function  SimpleRegistrationComp({titlePage='',buttonName ="", clickHandler= f=>f}) {
    return <div>

              <h1 id="title">{titlePage}</h1>

              <Form id="from">
                <Row className="mb-4">
                  <Form.Group as={Col} controlId="formBasicName">{/* Same as id ,controlId*/}
                    <Form.Label>Name</Form.Label>
                     <Form.Control type="text"  />
                 </Form.Group>

                 <Form.Group as={Col} controlId="formBasicLast">{/* Same as id ,controlId*/}
                    <Form.Label>Last Name</Form.Label>
                     <Form.Control type="text"  />
                 </Form.Group>
                </Row>

                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formBasicEmail">
                      <Form.Label>Email </Form.Label> 
                        <InputGroup className="mb-2">
                           <Form.Control type="email"/>
                            <InputGroup.Text>@</InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                 
                  <Form.Group as={Col} controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password"  />
                     <Form.Text id="passwordHelpBlock" muted>
                      Your password must be 8-20 characters long, contain letters and numbers, and
                      must not contain spaces, special characters, or emoji.
                      </Form.Text>
                 </Form.Group>
                 </Row>

                <Button variant="secondary" type="submit" size="lg" id="submit"  onClick={(e)=>{
                   e.preventDefault();
                    //Collect all the ID from the registration form
                  var validatioErrorOrData= validateSimpleRegistration('formBasicName','formBasicLast','formBasicEmail','formBasicPassword');

                  if(typeof validatioErrorOrData =='string'){ //If there is an error it is sent in a string
                     notify(validatioErrorOrData); //A designed toast message will be sent to the customer if he has not written a text in the input
                 }else{
                     clickHandler(validatioErrorOrData); // Checks if he can connect to the site
                 }}} >{buttonName}

                </Button> 

                </Form>

            </div>
}

export default SimpleRegistrationComp;