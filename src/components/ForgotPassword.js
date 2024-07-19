import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const ConfirmationPassword=()=>{
    useEffect(() =>{
        document.title = 'Забыли пароль?';
    }, []);
    return(
        <>
            <form className="signin">
                <div className="topsignin">
                    <h4>LOGO</h4>
                    <h3>Забыли пароль?</h3>

                </div>
                <div className="inputsignin">
                    <p>Напишите ваш электронный адрес и мы <br/> отправим на него одноразовый пароль <br/> для авторизации</p>
                    <input type="email"/>
                </div>
                <Link to="/confirmation_password/">
                    <button>Отправить</button>
                </Link>
            </form>
        </>
    )
}



export default ConfirmationPassword;