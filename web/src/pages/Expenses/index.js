import React from 'react';
import { FaPlus } from "react-icons/fa"

import './styles.css'
import Table from '../../components/Table';


export default function Expenses(){
    return(
        <div className="main-container">
            <div className="row">
                 <h2 className="container-title">Despesas</h2>
                 
                 <button className="top-button"><FaPlus/> <p>Adicionar Despesa </p></button>
                 

            </div>
       
       <Table/>
        </div>
    );
}