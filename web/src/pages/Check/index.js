import React from 'react';
import { FiArrowUp,FiArrowDown } from "react-icons/fi"
import './styles.css'

import Table from '../../components/Table'


export default function Check(){
    return(
        <div className="main-container">
        <div className="row">
             <h2 className="container-title">Cheques da Semana</h2>
        </div>
        
        <Table/>
   
    </div>
    );
}