import { registerNewAccount } from '../helpers/FetchHelper';
import {toast} from 'react-toastify';
import {Container} from 'react-bootstrap';
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import CreateCardComp from '../components/my-cards/CreateCardComp';
import {useState} from 'react';


function  BusinessRegistrationPage () {

    const[isStep1,setIsStep1]= useState(true);
  
    return <div> 
                <Container> 
                    {/* What will be written on the button */}
                    {/* Wrap each component in curly braces (which means there is a calculation inside),If step1 exists and also everything that exists in the component */}
                    {isStep1 && <SimpleRegistrationComp clickHandler={registerUser} buttonName="Sign-up Busines"  titlePage="Business Registration"></SimpleRegistrationComp>}
                    {/* * In the RegistrationBusinessAccount function on the page,
                    When the user presses NEXT, he converts the useState variable in parentheses to FALSE.
                    * What it does - in initial run, first browse, on the Business page
                    By pressing NEXT the display will change to a card creation form. */}
                    {!isStep1 && <CreateCardComp clickHandler={createCard}></CreateCardComp>}
                </Container>
           </div>


             // Business connection made or not made
                function  registerUser(data) {
                    data.biz= true;
                    registerNewAccount(data,(data)=>{
                    if(data._id){
                         toast('Account Created Successfully');
                         setIsStep1(false);   
                    }else{
                         toast('Eror Acount was not created');
                    }});
                }
                function createCard() {
                    alert('create card');
                }
}

export default BusinessRegistrationPage;