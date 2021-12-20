import NavigationRouteComp from'./NavigationRouteComp';
import NavigationBarComp from "./NavigationBarComp";
import {BrowserRouter as Router} from 'react-router-dom';

// The "father" file of the menu here contains a call for "children"


function SinglePageAppComp ({set,user}) {
    return <div>
        {/* The <Router> must wrap all the <switch> */}
                <Router>
                     {/*This directory can see what is written in the address bar and access the relevant page, i.e. make the link.  */}
                     <NavigationBarComp user={user} ></NavigationBarComp>
                     <NavigationRouteComp set={set} user={user}></NavigationRouteComp>
                </Router>

          </div>
}
export default SinglePageAppComp;