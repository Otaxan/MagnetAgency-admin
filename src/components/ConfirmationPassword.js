import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPassword=()=>{
    return(
        <>
            <form className="signin">
                <div className="topsignin">
                    <h4>LOGO</h4>
                    <h3>Подтверждение</h3>

                </div>
                <div className="inputsignin">
                    <p>Мы отправили вам код для подтверждения <br/> на вашу почту. Введите его ниже :</p>
                    <input type="password"/>
                </div>
                <Link to="/sign_in/">
                    <button>Подтвердить</button>
                </Link>
            </form>
        </>
    )
}



export default ConfirmationPassword;