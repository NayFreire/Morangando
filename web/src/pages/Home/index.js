import React from 'react';
import './styles.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import SidebarMenu from '../../components/SidebarMenu'
import TopMenu from '../../components/TopMenu'
import Main from "../Main/index";

export default function Home(){
    return(
        <div className="mainHome">
           
            <BrowserRouter>
                <SidebarMenu/>
                <TopMenu/>
                <Switch>           
                    <Route path="/home" active component={Main} />
                </Switch>
            </BrowserRouter>
        </div>
        
    );
}