import {Switch, Route} from 'react-router-dom';
import { tabs } from '../../helpers/tabs';

// Another son of the component-SinglePageAppComp

function NavigationRouteComp({set,user}){
     return <div>
               <Switch>
                     {tabs.map((tab, index)=>  
                    <Route key={index} path={tab.href}>
                         { <tab.page set={set} user={user}></tab.page>} 
                         {/*  is a dynamic code that changes each time to the name of a different page and will display it. */}
                   </Route>)}
              </Switch>
           </div>
}

export default NavigationRouteComp;