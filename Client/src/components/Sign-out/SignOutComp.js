import {Button} from "react-bootstrap";

function SignOutUser() {
    return (
      <Button variant="secondary"  onClick={()=>{
            localStorage.removeItem("token");
            window.location.href="http://localhost:3001/home";
        }}>
        Log-Out
      </Button>
     )
}
export default SignOutUser;