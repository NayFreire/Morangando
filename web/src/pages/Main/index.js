import React from 'react';
import { FiArrowUp,FiArrowDown } from "react-icons/fi"
import './styles.css'

import graph1 from '../../assets/graph1.svg'
import graph2 from '../../assets/graph2.svg'

export default function Main(){
    return(
        <div className="main-container">
            <div className="row">

                <div className="card">
                    <div className="card-info">
                        <div className="card-title">Entrada do Caixa</div>
                        <div className="card-value">R$2.345,53</div>
                        <div className="card-tax up">
                            +3,3%
                            <p>desde o último mês</p>
                        </div>

                    </div>
                    <div className="card-icon green">
                        <FiArrowUp size={35}/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="card-title">Entrada do Caixa</div>
                        <div className="card-value">R$2.345,53</div>
                        <div className="card-tax up">
                            +3,3%
                            <p>desde o último mês</p>
                        </div>

                    </div>
                    <div className="card-icon green">
                        <FiArrowUp size={35}/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="card-title">Entrada do Caixa</div>
                        <div className="card-value">R$2.345,53</div>
                        <div className="card-tax up">
                            +3,3%
                            <p>desde o último mês</p>
                        </div>

                    </div>
                    <div className="card-icon green">
                        <FiArrowUp size={35}/>
                    </div>
                </div>
                <div className="card">
                    <div className="card-info">
                        <div className="card-title">Entrada do Caixa</div>
                        <div className="card-value">R$2.345,53</div>
                        <div className="card-tax up">
                            +3,3%
                            <p>desde o último mês</p>
                        </div>

                    </div>
                    <div className="card-icon green">
                        <FiArrowUp size={35}/>
                    </div>
                </div>
            </div>
            <div className="graph-div">
                <img src={graph1} alt=""/>
                <img src={graph2} alt=""/>
            </div>
        </div>
    );
}