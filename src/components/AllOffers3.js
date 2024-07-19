import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../images/search.svg"


const AllOffers3=()=>{
    useEffect(() =>{
        document.title = 'Все Офферы';
    }, []);
    const [offers, setOffers] = useState([
        { id: '1', title: 'Название оффера', country: 'Франция', bid: '50$', },
        { id: '2', title: 'Название оффера', country: 'Франция', bid: '50$', },
        { id: '3', title: 'Название оффера', country: 'Франция', bid: '50$', },
        { id: '4', title: 'Название оффера', country: 'Франция', bid: '30$', },
        { id: '5', title: 'Название оффера', country: 'Франция', bid: '30$', },
        { id: '6', title: 'Название оффера', country: 'Франция', bid: '30$', },
        { id: '7', title: 'Название оффера', country: 'Франция', bid: '50$', },
        { id: '8', title: 'Название оффера', country: 'Франция', bid: '50$', },
        { id: '9', title: 'Название оффера', country: 'Франция', bid: '50$', },
        { id: '10', title: 'Название оффера', country: 'Франция', bid: '40$', },
        { id: '11', title: 'Название оффера', country: 'Франция', bid: '40$', },
        { id: '12', title: 'Название оффера', country: 'Франция', bid: '40$', },
        { id: '13', title: 'Название оффера', country: 'Франция', bid: '50$', },




      ]);
    const [currentOffer, setCurrentOffer] = useState(null);
    
    const handleDeleteOffer = (index) => {
        setOffers(offers.filter((_, i) => i !== index));
        if (currentOffer && currentOffer.index === index) {
          setCurrentOffer(null);
        }
        };
    return(
        <>

            <div className="container">
                <h3>Офферы</h3>
                <div className="allusers">

                <div className="users">
                    <h5>Все офферы</h5>
                    <div>
                        <input type="text" className="search" placeholder="Поиск..." />
                        <Link className="linksearch"><SearchIcon /></Link>
                    </div>
                </div>
                <table className="tableall">
                    <thead>
                        <tr>
                            <th>Id offer</th>
                            <th style={{ textAlign: 'left' }}>Название</th>
                            <th style={{ textAlign: 'left' }}>Страна</th>
                            <th style={{ textAlign: 'left' }}>Ставка</th>
                            <th style={{ textAlign: 'left' }}>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offers.map((offer, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td style={{ textAlign: 'left' }}>{offer.title}</td>
                            <td style={{ textAlign: 'left' }}>{offer.country}</td>
                            <td style={{ textAlign: 'left' }}>{offer.bid}</td>
                            <td className="tdicons" style={{ textAlign: 'left' }}>
                                <Link to="/add_user/" className="tdlinkchange">
                                    Редактировать
                                </Link>
                                <Link onClick={() => handleDeleteOffer(index)} className="tdlinkchange">
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


export default AllOffers3;