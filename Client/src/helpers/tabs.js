 import HomePage from "../pages/HomePage";
 import Welcome  from "../pages/Welcome";
 import AboutPage from "../pages/AboutPage";
 import SignInPage from "../pages/SignInPage";
 import BusinessRegistrationPage from '../pages/BusinessRegistrationPage';
 import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
 import MyCardsPage from "../pages/MyCardsPage";
 import {BiHome} from 'react-icons/bi';
 import {IoIosPeople} from 'react-icons/io';
 import{MdOutlineAppRegistration} from 'react-icons/md';
 import {MdBusinessCenter} from 'react-icons/md';
 import {BiLogIn} from 'react-icons/bi';
 import {BiIdCard} from 'react-icons/bi';


//menu  
export const tabs =[
     {
         name:'Home',
         href:'/home',
         page:HomePage,
         displayForLoggedin:true,
         icon: <BiHome> </BiHome>
    },
    {
        name:'About',
        href:'/about',
        page:AboutPage,
        displayForLoggedin:true,
        icon: <IoIosPeople></IoIosPeople>
   },
   {
        name:'Customer registration',
        href:'/simple-registration',
        page:SimpleRegistrationPage,
        displayForLoggedin:false,
        icon: <MdOutlineAppRegistration></MdOutlineAppRegistration>
    },
    {
        name:'Business Registration',
        href:'/business-registration',
        page:BusinessRegistrationPage,
        displayForLoggedin:false,
        icon: <MdBusinessCenter></MdBusinessCenter>
    },
    {
        name:'My Cards',
        href:'/my-cards',
        page:MyCardsPage,
        displayForLoggedin:true,
        hideForLoggedout:true,
        icon:<BiIdCard></BiIdCard>
        },
    {
        name:'Login',
        href:'/sign-in',
        page:SignInPage ,
        displayForLoggedin:false,
        icon:<BiLogIn></BiLogIn>
    },
    {
        name:'Welcome',
        href:'/welcome',
        page:Welcome,
        hideForLoggedout:true,
        
    }
];