import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const SignIn=()=>{
    useEffect(() =>{
        document.title = 'Авторизация';
    }, []);
    return(
        <>
        <form className="signin">
            <div className="topsignin">
                <h4>LOGO</h4>
                <h3>Авторизация</h3>

            </div>
            <div className="inputsignin">
                <p>Ваш электронный адрес</p>
                <input type="email"/>
            </div>
            <div className="inputsignin">
                <p>Ваш пароль</p>
                <input type="password"/>
            </div>
            <Link to="/">
                <button>Войти</button>
            </Link>
            <div className="flexsignin">
                <p>У вас нет аккаунта?</p>
                <Link to="/sign_up/" className="linksignin">Зарегистрироваться</Link>
            </div>
            <div className="flexsignin">
                <p style={{ marginRight: '1.75rem' }}>Забыли пароль?</p>
                <Link to="/forgot_password/" className="linksignin">Восстановить</Link>
            </div>
        </form>
        </>
    )
}



export default SignIn