import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const AddUser2=()=>{
    useEffect(() =>{
        document.title = 'Добавить пользователя';
    }, []);


    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ["Пользователь", "Аффилиат-менеджер", "Модератор", "СуперАдмин"];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };
    return(
        <>
            <div className="container">
                <h3>Пользователи</h3>
                <div className="add-user">
                    <h5>Добавить пользователя</h5>
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
                        {/* <p>Должность</p> */}
                        <div className="dropdown">
                            <label>Должность</label><br/>
                            <div className="dropdown-header" onClick={toggleDropdown}>
                            <div className="headdrop"><span>{selectedOption}</span> <span>{isOpen ? '▲' : '▼'}</span></div>
                            
                            </div>
                            {isOpen && (
                            <div className="dropdown-options">
                                {options.map((option, index) => (
                                <div
                                    key={index}
                                    className="dropdown-option"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </div>
                                ))}
                            </div>
                            )}
                        </div>
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

export default AddUser2;