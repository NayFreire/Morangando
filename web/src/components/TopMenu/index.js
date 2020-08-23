import React from 'react';
import {Link} from 'react-router-dom';
import { FiSearch,FiBell,FiChevronDown } from "react-icons/fi"
import { FaArrowDown } from "react-icons/fa"

import './styles.css'


export default function TopMenu(){

    return(
        <div className="mainTopMenu">
            
            <div className="input-container2">
                <FiSearch size="22px"/>
                <input type="text" placeholder="PROCURAR"/>
            </div>

            <div className="config-div">
                <FiBell size="22px"/>
                <div className="circle-user">JP</div>
                <FiChevronDown size="22px"/>
                
            </div>
        </div>
    );
}