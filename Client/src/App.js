import { ToastContainer } from 'react-toastify';
import SinglePageAppComp from "./components/navigation/SinglePageAppComp";
import {useState , useEffect} from 'react';
import { getMeData } from './helpers/FetchHelper';
import Footer from './components/footer/Footer';
import "./App.css";



function App(){
   const [user,set]= useState({});
 
//    Enter a signIn variable - It will be equal to true or false - if it gets what localStorage token is true.
   useEffect( ()=>{ 
   getMeData(localStorage.getItem('token'), (data)=>{
    set(data);
        });
    }  , [] );

return <div className="App" >
    
             {user && user.id} 
             {/*Calls component component and that it hurts white 3 reading chain  */}
            <SinglePageAppComp set={set} user={user}></SinglePageAppComp>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
   
</div>
}

export default App;