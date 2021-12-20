import {Navbar,Nav,Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {tabs} from '../../helpers/tabs';
import SignOutUser from "../Sign-out/SignOutComp";

// Here are the codes of the menu - links, GUI and in the future we will also call here the navigation component.

//Extracted given user from component dad was performed here Distraction 
// In fact an object that is with the father and now sits with him
// This component wants to know who the user is because a logged in user gets one menu, and an offline user gets another menu.
function  NavigationBarComp ({user}) {
    // In curly brackets if we enter a given id with a number - then we will see the menu of a registered user
    //If there is no user id then there will be a view of the initial menu of an unregistered user.
     return <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
                    <Container>
                      <Navbar.Brand href="http://localhost:3001/home">Real-estate</Navbar.Brand>
                      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                      <Navbar.Collapse id="responsive-navbar-nav">
                      <Nav className="me-auto">
                          {/* If you are a registered user you will only return the registered ones to me. If you are not registered then you will filter out the person whose logout is hidden */}
                          {
                            //   href == to
                            user._id 
                                ?
                            tabs.filter(x=>x.displayForLoggedin).map((tab,index)=> <Nav.Link key={index} to={tab.href} as={Link}> {tab.icon}  {tab.name} </Nav.Link>)
                                :
                            tabs.filter(x=> ! x.hideForLoggedout ).map((tab,index)=> <Nav.Link key={index} to={tab.href} as={Link}> {tab.icon} {tab.name} </Nav.Link>)
                          } 
                      </Nav> 
                      { user._id && <SignOutUser></SignOutUser>}
                      </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
};

export default NavigationBarComp;
