import React from 'react';
import { FaPlus } from "react-icons/fa"
import './styles.css'

import calendar from '../../assets/calendar.svg'

export default function Calendar(){
    return(
        <div className="main-container">
        <div className="row">
             <h2 className="container-title">Calendário</h2>
             <button className="top-button"><FaPlus/> <p>Adicionar Evento </p></button>
        </div>
        <img src={calendar} alt=""/>
    </div>
    );
}