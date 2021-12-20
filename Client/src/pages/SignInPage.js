import { signInUser } from '../helpers/FetchHelper';
import {Container} from 'react-bootstrap';
import SignInComp from "../components/sign-in/SignInComp";
import {toast} from 'react-toastify';
import { getMeData } from '../helpers/FetchHelper';


function SignInPage({set}) {
     return  <Container> 
                <SignInComp clickHandler={signIn}></SignInComp>
            </Container>;


            function signIn(data) {
                signInUser(data,(response)=>{
                       if(response.token){
                            toast('Welcome to U');
                            localStorage.setItem('token',response.token);
                            getMeData(response.token, (data)=>{set(data);});
                            
                            window.location.href="http://localhost:3001/welcome";
                       }else{
                            toast('Fail to login');}});
            }
}
export default SignInPage;