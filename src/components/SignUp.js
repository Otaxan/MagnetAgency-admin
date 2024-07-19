import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const SignUp=()=>{
    useEffect(() =>{
        document.title = 'Регистрация';
    }, []);
    return(
        <>
            <form className="signin">
                <div className="topsignin">
                    <h4>LOGO</h4>
                    <h3>Регистрация</h3>

                </div>
                <div className="inputsignin">
                    <p>Ваш электронный адрес</p>
                    <input type="email"/>
                </div>
                <div className="inputsignin">
                    <p>Ваш пароль</p>
                    <input type="password"/>
                </div>
                <div className="inputsignin">
                    <p>Подтвердите пароль</p>
                    <input type="password"/>
                </div>
                <Link to="/sign_in">
                    <button>Зарегистрироваться</button>
                </Link>
            </form>
        </>
    )
}



export default SignUp;