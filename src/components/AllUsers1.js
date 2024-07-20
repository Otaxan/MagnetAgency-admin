import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../images/search.svg"


const AllUsers1=()=>{
    useEffect(() =>{
        document.title = 'Все пользователи';
    }, []);
    const [users, setUsers] = useState([
        { id: '1', email: 'alexxx@mail.com', telegram: '@alexmank', role: 'пользователь' },
        { id: '2', email: 'john@example.com', telegram: '@john_doe', role: 'пользователь' },
        { id: '3', email: 'jane@example.com', telegram: '@jane_doe', role: 'пользователь' },
        { id: '4', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
        { id: '5', email: 'smith@example.com', telegram: '@smith', role: 'пользователь' },
 
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