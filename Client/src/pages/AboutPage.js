import {useState,setShow} from 'react';
import {Offcanvas,Button} from 'react-bootstrap';


export default function AboutPage () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return  <div>
                <h1 id="title"> I am about page</h1>
                <div id="par">
                  <p>Hello, my name is Michaela Noam.
                   I built a site with a brokerage past.
                   </p>
                  <p>Every user must register for a website, business owner and simple customer.</p>
                   The business owner can create cards for himself that describe the sale of the homes made and thus he will have a follow-up while a regular customer, will be able to view all the tickets and see who sold more where and loot cost.
                </div> 

                <Button variant="secondary" id="submitAbout" onClick={handleShow}>More sites</Button>

                <Offcanvas show={show} onHide={handleClose} style={{backgroundColor:'gainsboro'}}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title style={{ color:'blue' , padding:20, margin:10, }}>
                        <p>More sites for finding apartments</p>
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ul>
                        <li><a href="https://www.yad2.co.il" target="_blank" yad2  >yad2</a></li>
                        <li><a href="https://www.madlan.co.il/" target="_blank">madlan</a></li>
                        <li><a href="https://www.homeless.co.il/" target="_blank">homeless</a></li>
                        <li><a href="https://www.komo.co.il/code/nadlan/apartments-for-rent.asp" target="_blank">komo</a></li>
                    </ul>
                  </Offcanvas.Body>
              </Offcanvas>
      

            </div>

  
}  
