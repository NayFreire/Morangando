import React from 'react';
import { FiMail,FiLock  } from "react-icons/fi"
import {Link,useHistory} from 'react-router-dom';


import background from '../../assets/background-waves.svg'
import Title from '../../assets/MORAN GANDO.svg'
import './styles.css'


export default function Login(){
    const history = useHistory();

    function logar(){
        history.push('/home')
    }

    return(
        <div className="container" style={{backgroundImage: `url(${background})`}}>
            <div className="form">
                <img src={Title} alt="Morangando"/>
                <h2 className="text" >Olá bem vindo de volta. Logue-se para continuar.</h2>

                <form onSubmit={logar} action="" method="post">
                    <div className="input-container">
                        <FiMail size="25px"/>
                        <input type="email" placeholder="EMAIL"/>
                    </div>
                    <div className="input-container">
                        <FiLock size="25px"/>
                        <input type="password" placeholder="SENHA"/>
                    </div>
                </form>
                {/* <div className="row">
                <label>
                    <input type="checkbox"
                        // checked={this.state.isChecked}
                        // onChange={this.toggleChange}       
                    />
                Lembre-se de mim
                </label>
                    <h2 className="text">Esqueceu a senha?</h2>
                </div> */}

                 <br/>
                 <Link to='/home'><button type="submit">ENTRAR</button></Link>
            </div>

            <div className="register-div">
                <h2 className="text">Novo por aqui? cadastre-se agora.</h2>
            </div>
        </div>
    );
}