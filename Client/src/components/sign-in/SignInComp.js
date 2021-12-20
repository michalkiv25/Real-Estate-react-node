import  validateSignIn from '../../helpers/signInHelper';
import {Form,Button,Row,Col} from 'react-bootstrap';
import {toast} from 'react-toastify';


function  SignInComp({clickHandler= f => f }) {
     return <div> 

               <h1 id="title">Login to the site</h1>
               <Form id="from">
                  <Row className="mb-4">
                     <Form.Group as={Col} controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
    
                     <Form.Group as={Col} controlId="formBasicPassword">
                         <Form.Label>Password</Form.Label>
                         <Form.Control type="password"  />
                    </Form.Group>
                  </Row>
                <Button variant="secondary" type="submit"  id="submit"  onClick={(e)=>{
                     e.preventDefault(); 

                     var errorOrData= validateSignIn('formBasicEmail','formBasicPassword');//Gathers all the values ​​of the user into one variable
                     if(typeof errorOrData=='string'){
                         toast(errorOrData);
                       }else{
                         clickHandler(errorOrData);}}}> Sign in
                </Button>
              </Form>
          </div>
}
export default SignInComp;