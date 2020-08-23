import React from 'react';
import {Link} from 'react-router-dom';
import { FiHome,FiCalendar,FiDollarSign,FiUsers,FiPackage } from "react-icons/fi"
import { FaSeedling,FaWallet } from "react-icons/fa"

import './styles.css'
import background from '../../assets/waves -sidebar.svg'
import title from '../../assets/MORAN GANDO -medium.svg'

export default function SidebarMenu(){
    return(
        <>
        <nav className="navbar">
             <ul className="navbar-nav">
                 
                     <img src={title} alt="Morangando"/>
                

                <li className="nav-item">
                    <Link className="nav-link">
                        <FiHome size={22}/>
                        <span className="text-link">Home</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link">
                        <FiCalendar size={22}/>
                        <span className="text-link">Calendário</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link">
                        <FiDollarSign size={22}/>
                        <span className="text-link">Cheques</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link">
                        <FiUsers size={22}/>
                        <span className="text-link">Fornecedores</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link">
                        <FiPackage size={22}/>
                        <span className="text-link">Remessas</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link">
                        <FaSeedling size={22}/>
                        <span className="text-link">Lavouras</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link">
                        <FaWallet size={22}/>
                        <span className="text-link">Despesas</span>
                    </Link>
                </li>

                
                {/* <img src={background} alt="" className="nav-link"/> */}
               

             </ul>
         </nav>
       
        </>
    );

}