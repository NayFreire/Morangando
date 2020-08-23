import React from 'react';
import {NavLink} from 'react-router-dom';
import { FiHome,FiCalendar,FiDollarSign,FiUsers,FiPackage } from "react-icons/fi"
import { FaSeedling,FaWallet } from "react-icons/fa"

import './styles.css'
import background from '../../assets/waves -sidebar.svg'
import title from '../../assets/MORAN GANDO -medium.svg'

export default function SidebarMenu(){
    return(
        <>
        <nav className="navbar" >
             <ul className="navbar-nav">
                 
                     <img src={title} alt="Morangando"/>
                

                <li className="nav-item">
                    <NavLink to="/home" className="nav-link">
                        <FiHome size={22}/>
                        <span className="text-link">Home</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/calendar"className="nav-link">
                        <FiCalendar size={22}/>
                        <span className="text-link">Calendário</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/check" className="nav-link">
                        <FiDollarSign size={22}/>
                        <span className="text-link">Cheques</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/providers" className="nav-link">
                        <FiUsers size={22}/>
                        <span className="text-link">Fornecedores</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/shipping" className="nav-link">
                        <FiPackage size={22}/>
                        <span className="text-link">Remessas</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/tillage" className="nav-link">
                        <FaSeedling size={22}/>
                        <span className="text-link">Lavouras</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/expenses" className="nav-link">
                        <FaWallet size={22}/>
                        <span className="text-link">Despesas</span>
                    </NavLink>
                </li>

                
                {/* <img src={background} alt="" className="nav-link"/> */}
               

             </ul>
         </nav>
       
        </>
    );

}