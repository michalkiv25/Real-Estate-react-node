import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/simple-registration/SimpleRegistrationComp";
import { registerNewAccount } from "../helpers/FetchHelper";
import {  toast } from 'react-toastify';

function  SimpleRegistrationPage () {
    return <Container> 
                 <SimpleRegistrationComp
                //  Aterbiot data to Companana
                  clickHandler={registerUser}
                  buttonName="Sign-up Costomer"
                  titlePage="Costomer Registration">
                 </SimpleRegistrationComp>
            </Container>

             function registerUser(data) {
                registerNewAccount(data,
                    (data)=>{
                      if(data._id){
                            toast('Account Created Successfully'); 
                      }else{
                            toast('Eror Acount was not created');
                      }});
            }
}
export default SimpleRegistrationPage;