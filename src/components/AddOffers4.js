import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../images/close.svg";


const AddOffers4=()=>{
    useEffect(() =>{
        document.title = 'Добавить Оффера';
    }, []);
    
    const [selectedValuta, setSelectedValuta] = useState('');
    const handleChange1 = (event) => {
        setSelectedValuta(event.target.value);
    };


    const [selectedCountry, setSelectedCountry] = useState('');
    const handleChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const [selectedMetod, setSelectedMetod] = useState('');
    const handleChange2 = (event) => {
        setSelectedMetod(event.target.value);
    };


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
                <h3>Офферы</h3>
                <div className="add-user add-offer">
                    <h5>Добавить оффер</h5>
                    <div className="column4">
                        <p>Заголовок</p>
                        <input type="text" />
                    </div>
                    <div className="column4">
                        <p>Детальное описание</p>
                        <textarea className="detailtextarea" type="text" placeholder="Введите текст" />
                    </div>
                    <div className="column4">
                        <p>Ставка</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <input type="text" style={{ width: '60%' }} />
                            <div className="select3" style={{ padding: '1px 5px', cursor: 'pointer' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                                <select
                                value={selectedValuta}
                                onChange={handleChange1}
                                style={{ fontSize: '1rem', outline: 'none', cursor: 'pointer' }}
                                >
                                <option value="USD">USD</option>
                                <option value="RUB">RUB</option>
                                <option value="UZS">UZS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="column4">
                        <p>Страна</p>
                        <div className="select3" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedCountry}
                            onChange={handleChange}
                            style={{ height: '2rem', fontSize: '1rem', width: '100%', outline: 'none', cursor: 'pointer', marginTop: '5px' }}
                            >
                            <option value="">Выберите страну</option>
                            <option value="Россия">Россия</option>
                            <option value="Америка">Америка</option>
                            <option value="Канада">Канада</option>
                            <option value="Китай">Китай</option>
                            </select>
                        </div>
                    </div>
                    <div className="column4">
                        <p>Метод оплаты</p>
                        <div className="select3" style={{ display: 'flex', alignItems: 'center', padding: '1px 5px', cursor: 'pointer', marginTop: '5px' }}>
                            {/* <div style={{ marginRight: '10px' }}>▼</div> */}
                            <select
                            value={selectedMetod}
                            onChange={handleChange2}
                            style={{ height: '2rem', width: '100%', fontSize: '1rem', outline: 'none', cursor: 'pointer' }}
                            >
                            <option value="">Выберите метод оплаты</option>
                            
                            </select>
                        </div>
                    </div>
                    <div className="column4">
                        <p>Изображение</p>
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
                                    <button className="remove-button" onClick={handleImageRemove} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>Отменить изображение  <Close /></button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to="/all_offers/">

                        <button style={{ backgroundColor: '#51add5', textAlign: 'left' , width: '18rem', borderRadius: '5px', padding: '10px 1rem', fontSize: '1rem' }}>Опубликовать</button>
                        </Link>

                    </div>

                </div>
            </div>

        </>
    )
}

export default AddOffers4;