import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../images/search.svg"


const AllUsers1=()=>{
    const [users, setUsers] = useState([
        { id: '1', email: 'alexxx@mail.com', telegram: '@alexmank', role: 'пользователь' },
        { id: '2', email: 'john@example.com', telegram: '@john_doe', role: 'пользователь' },
        { id: '3', email: 'jane@example.com', telegram: '@jane_doe', role: 'пользователь' },
        { id: '4', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '5', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '6', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '7', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '8', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '9', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '10', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '11', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '12', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '13', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },




    ]);
    const [currentUser, setCurrentUser] = useState(null);
    
    const handleDeleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
        if (currentUser && currentUser.index === index) {
          setCurrentUser(null);
        }
        };
    return(
        <>

            <div className="container">
                <h3>Пользователи</h3>
                <div className="allusers">

                <div className="users">
                    <h5>Все пользователи</h5>
                    <div>
                        <input type="text" className="search" placeholder="Поиск..." />
                        <Link className="linksearch"><SearchIcon /></Link>
                    </div>
                </div>
                <table className="tableall">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th style={{ textAlign: 'left' }}>E-mail</th>
                            <th style={{ textAlign: 'left' }}>Telegram</th>
                            <th style={{ textAlign: 'left' }}>Роль</th>
                            <th style={{ textAlign: 'left' }}>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td style={{ textAlign: 'left' }}>{user.email}</td>
                            <td style={{ textAlign: 'left' }}>{user.telegram}</td>
                            <td style={{ textAlign: 'left' }}>{user.role}</td>
                            <td className="tdicons" style={{ textAlign: 'left' }}>
                                <Link to="/add_user/" className="tdlinkchange">
                                    Редактировать
                                </Link>
                                <Link onClick={() => handleDeleteUser(index)} className="tdlinkchange">
                                    Удалить
                                </Link>
                                
                            </td>
                        </tr>
                        ))}
                        
                    </tbody>
                </table>
                </div>

            </div>
        </>
    )
}


export default AllUsers1;