import React from 'react';
import { FaCartPlus } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import './styles.css'
import Table from '../../components/Table';


export default function Remessas(){
    return(
        <div className="main-container">
            <div className="row">
                 <h2 className="container-title">Remessas</h2>
                 <button className="green-bc top-button"> <FaCartPlus/> <p>Comprar</p></button>
                 <button className="top-button"><FiShoppingCart/> <p>Vender </p></button>
                 

            </div>
       
       <Table/>
        </div>
    );
}