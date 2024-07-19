import React, {useState} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseSvg } from "../images/close.svg"



const SendFunds9=()=>{

    // Upload img
    const [selectedImage, setSelectedImage] = useState(null);
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleImageRemove = () => {
        setSelectedImage(null);
    };


    return(
        <>
            <div className="container">
                <h3>Вывод средств</h3>
                <div className="sendfunds add-user">
                    <h3>Запрос на вывод средств</h3><br/>
                    <div className="flexsend">
                        <p>Пользователь :</p>
                        <h4 style={{ marginLeft: '5.5rem' }}>НикНейм</h4>
                    </div>
                    <div className="flexsend">
                        <p>Текущий баланс :</p>
                        <h4 style={{ marginLeft: '4.3rem' }}>20000$</h4>
                    </div>
                    <div className="flexsend">
                        <p>Запрашиваемая сумма :</p>
                        <h4 style={{ marginLeft: '1rem' }}>2000$</h4>
                    </div>
                    <div className="flexsend">
                        <p>USDT кошелёк :</p>
                        <h4 style={{ marginLeft: '5.2rem' }}>TH4anc9AMAn7kyVPr6nuXBRwf1akgzCgsZ</h4>
                    </div>
                    <div className="flexsend">
                        <p>Телеграм :</p>
                        <h4 style={{ marginLeft: '7.7rem' }}>@kmkmoo</h4>
                    </div>
                    <div className="column4" style={{ marginTop: '3rem' }}>
                        <h4>Чек по операции</h4>
                        <div className="image-upload-container">
                            <label htmlFor="file-upload" className="custom-file-upload">
                                Загрузить
                            </label>
                            <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
                            {selectedImage && (
                                <div className="image-preview">
                                    <div>
                                        <img src={selectedImage} alt="" />

                                    </div>
                                    <button className="remove-button" style={{ display: 'flex', alignItems: 'center', gap: '5rem', marginTop: '14.7rem' }} onClick={handleImageRemove}>Отменить <CloseSvg/> </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <Link to="/funds_requests/">
                    <button style={{ backgroundColor: '#51add5', textAlign: 'left' , width: '18rem', borderRadius: '5px', padding: '10px 1rem', fontSize: '1rem', border: 'none', color: "white", cursor: "pointer" }}>Отправить</button>
                    
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default SendFunds9;