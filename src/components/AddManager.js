import React, {useEffect} from "react";
import { Link } from "react-router-dom";

const AddManager=()=>{
    useEffect(() =>{
        document.title = 'Добавить менеджера';
    }, []);
    return(
        <>
            <div className="container">
                <h3>Менеджеры</h3>
                <div className="add-user">
                    <h5>Добавить Менеджера</h5>
                    <div className="column">
                        <p>E-mail</p>
                        <input type="email" />
                    </div>
                    <div className="column">
                        <p>Telegram</p>
                        <input type="text" />
                    </div>
                    <div className="column">
                        <p>Имя</p>
                        <input type="text" />
                    </div>
                    <div className="column">
                        <p>Пароль</p>
                        <input type="password" className="search" />
                    </div>
                    <div className="buttons">
                        <Link to="/" className="linkaddus">
                            <button className="bluebut">Сохранить</button>
                        
                        </Link>
                        <button className="butblock">Заблокировать</button>
                        <button className="butdel">Удалить</button>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AddManager;