import React from 'react';
import './styles.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import SidebarMenu from '../../components/SidebarMenu'
import TopMenu from '../../components/TopMenu'
import Main from "../Main/index";
import Calendar from "../Calendar/index";
import Check from "../Check/index";
import Providers from "../Providers/index";
import Shipping from "../Shipping/index";
import Tillage from "../Tillage/index";
import Expenses from "../Expenses/index";

export default function Home(){
    return(
        <div className="mainHome">
           
            <BrowserRouter>
                <SidebarMenu/>
                <TopMenu/>
                <Switch>           
                    <Route path="/home"  component={Main} />
                    <Route path="/calendar"  component={Calendar} />
                    <Route path="/check"  component={Check} />
                    <Route path="/providers"  component={Providers} />
                    <Route path="/shipping"  component={Shipping} />
                    <Route path="/tillage"  component={Tillage} />
                    <Route path="/expenses"  component={Expenses} />
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}