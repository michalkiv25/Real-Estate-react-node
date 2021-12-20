import {Form,Button,Row,Col,InputGroup} from 'react-bootstrap';
import validateCard from '../../helpers/cardHelper';
import {toast} from 'react-toastify';
function  CreateCardComp({clickHandler}) {
  return  <div>
                <h1 id="title"> Create a card</h1>
                <Form id="from">
                <Row className="mb-3">
   
                  <Form.Group as={Col} controlId="formBasicBusinessName">
                    <Form.Label>Realtor Full Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formBasicBusinessPhone">
                    <Form.Label >Realtor Phone</Form.Label>
                    <Form.Control type="number" placeholder="0542055284"/>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formBasicBusinessAddress">
                    <Form.Label>Full address</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formBasicBusinessPrice">
                    <Form.Label>price</Form.Label>
                    <InputGroup className="mb-3">
                    <InputGroup.Text>₪</InputGroup.Text>
                    <Form.Control type="number" aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>
                  </Form.Group>
                </Row>

                  <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
                    <Form.Label>Description of the house</Form.Label>
                    <Form.Control type="text"  as="textarea" rows={3} />
                  </Form.Group>

                  <Form.Group className="mb-6" controlId="formBasicBusinessImage">
                    <Form.Label>Picture of the house</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                
                  <Button variant="secondary" type="submit" id="submit" onClick={(e)=>{
                      e.preventDefault();
                      var validatioErrorOrData= validateCard('formBasicBusinessName','formBasicBusinessPhone','formBasicBusinessAddress','formBasicBusinessPrice','formBasicBusinessDescription','formBasicBusinessImage');
                      if(typeof validatioErrorOrData =='string'){
                        toast(validatioErrorOrData); 
                      }else{
                        clickHandler(validatioErrorOrData); 
                      }
                  }}  >
                      Create Card
                  </Button>
                </Form>
          </div>

}
export default CreateCardComp;