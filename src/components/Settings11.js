import React, { useState, useEffect } from "react";
// import edit from "../images/edit.png";
// import del from "../images/delete.png";
import {Link} from "react-router-dom";
import {ReactComponent as Close} from "../images/close.svg"

const Settings11 = () => {
  const [activeTab, setActiveTab] = useState('languages');
  useEffect(() =>{
    switch (activeTab){
      case 'languages':
        document.title = 'Настройки - языки';
        break;
      case 'countries':
        document.title = 'Настройки - страны';
        break;
      case 'currencies':
        document.title = 'Настройки - валюты';
        break;
      case 'links':
        document.title = 'Настройки - ссылки';
        break;
      default:
        document.title = 'Настройки';
    }
  })
    // languages
  const [languages, setLanguages] = useState([
    { text: 'Французский', answer: '' },
    { text: 'Английский', answer: '' },
    { text: 'Греческий', answer: '' },
    { text: 'Испанский', answer: '' },
  ]);
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [languageText, setLanguageText] = useState('');
  const [answerText, setAnswerText] = useState('');
  const [fileInfo, setFileInfo] = useState(null);
  const handleSelectLanguage = (index) => {
    setCurrentLanguage({ ...languages[index], index });
    setLanguageText(languages[index].text);
    setAnswerText(languages[index].answer);
  };
  const handleSaveLanguage = () => {
    if (currentLanguage !== null) {
      const updatedLanguages = languages.map((lang, i) =>
        i === currentLanguage.index ? { text: languageText, answer: answerText } : lang
      );
      setLanguages(updatedLanguages);
      setCurrentLanguage(null);
      setLanguageText('');
      setAnswerText('');
      setFileInfo(null);
    } else {
      const newLanguage = { text: languageText, answer: answerText };
      setLanguages([...languages, newLanguage]);
      setLanguageText('');
      setAnswerText('');
      setFileInfo(null);
    }
  };
  const handleDeleteLanguage = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
    if (currentLanguage && currentLanguage.index === index) {
      setCurrentLanguage(null);
      setLanguageText('');
      setAnswerText('');
      setFileInfo(null);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileInfo({
        name: file.name,
        type: file.type
      });
    }
  };


//   Countries



const [countries, setCountries] = useState([
    { id: 1, name: 'Франция' },
    { id: 2, name: 'Великобритания' },
    { id: 3, name: 'Греция' },
    { id: 4, name: 'Испания' },
  ]);

  const [countryName, setCountryName] = useState('');
  const [countryIcon, setCountryIcon] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const handleAddCountry = () => {
    if (editingId) {
      setCountries(countries.map(country => (
        country.id === editingId ? { ...country, name: countryName, icon: countryIcon } : country
      )));
      setEditingId(null);
    } else {
      const newCountry = {
        id: countries.length + 1,
        name: countryName,
        icon: countryIcon,
      };
      setCountries([...countries, newCountry]);
    }
    setCountryName('');
    setCountryIcon(null);
  };

  const handleDeleteCountry = (id) => {
    setCountries(countries.filter((country) => country.id !== id));
  };

  const handleEditCountry = (id) => {
    const countryToEdit = countries.find((country) => country.id === id);
    setCountryName(countryToEdit.name);
    setCountryIcon(countryToEdit.icon);
    setEditingId(id);
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



//Valuta


const [currencies, setCurrencies] = useState([
    { id: 1, name: 'USD' },
    { id: 2, name: 'SUM' },
    { id: 3, name: 'RUB' },
    { id: 4, name: 'EUR' },
]);

const [currencyName, setCurrencyName] = useState('');
// const [currencyIcon, setCurrencyIcon] = useState(null);
const [editingId1, setEditingId1] = useState(null);

const handleAddCurrency = () => {
    if (editingId1) {
        setCurrencies(currencies.map(currency => (
            currency.id === editingId1 ? { ...currency, name: currencyName, } : currency
        )));
        setEditingId1(null);
    } else {
        const newCurrency = {
            id: currencies.length + 1,
            name: currencyName,
            // icon: currencyIcon,
        };
        setCurrencies([...currencies, newCurrency]);
    }
    setCurrencyName('');
    // setCurrencyIcon(null);
};

const handleDeleteCurrency = (id) => {
    setCurrencies(currencies.filter((currency) => currency.id !== id));
};

const handleEditCurrency = (id) => {
    const currencyToEdit = currencies.find((currency) => currency.id === id);
    setCurrencyName(currencyToEdit.name);
    // setCurrencyIcon(currencyToEdit.icon);
    setEditingId(id);
};

// Links





//Switch

  // const [activeTab, setActiveTab] = useState('languages');
  const renderSettings = () => {
    switch (activeTab) {
      case 'languages':
        return (
          <div className="languages add-user">
            <div className="answer" style={{ marginRight: '20px' }}>
              <h4 style={{ marginBottom: '22px' }}>Добавить язык</h4>
              <div className="selectlang">
                <div className="setlang" style={{ marginBottom: '1.5rem' }}>
                  <label>Название языка</label>
                  <input
                    type="text"
                    style={{ cursor: 'auto', width: '90%', borderRadius: '4px', backgroundColor: '#d1faffe0' }}
                    value={languageText}
                    onChange={(e) => setLanguageText(e.target.value)}
                    required
                  />
                </div>
                <div className="faqans">
                  <h4 style={{ marginBottom: '15px' }}>Файл языка</h4>
                  <label htmlFor="fileInput" style={{ padding: '10px 5rem' }} className="custom-file-upload">Загрузить</label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ height: '2.4rem', display: 'none', backgroundColor: 'rgb(128, 255, 181)', color: 'rgb(0, 96, 58)', paddingTop: '10px', paddingLeft: '10px' }}
                    onChange={handleFileChange}
                  />
                  {fileInfo && (
                    <div style={{ marginBottom: '10px', marginTop: '1rem' }}>
                      {fileInfo.name}
                    </div>
                  )}
                </div>
                <button onClick={handleSaveLanguage}>Добавить</button>
              </div>
            </div>
            <div className="maintablelang">
              <h3 style={{ marginLeft: '1rem' }}>Все языки</h3>
              <table className="tablealllang" style={{ width: "90%", borderCollapse: 'collapse', borderRadius: '4px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#d1faffe0' }}>
                    <th style={{ width: '3rem' }}>##</th>
                    <th style={{ textAlign: 'left', paddingLeft: '4rem', width: '15rem' }}>Название</th>
                    <th style={{ textAlign: 'left' }}>Действия</th>
                  </tr>
                </thead>
                <tbody>
                  {languages.map((language, index) => (
                    <tr key={index} className="trsettin">
                      <td style={{ width: '3rem', padding: '7px' }}>{index + 1}</td>
                      <td className="questd" style={{ textAlign: 'left', width: '20rem', padding: '7px', paddingLeft: '4rem' }}>{language.text}</td>
                      <td style={{ textAlign: 'left', width: '5rem', padding: '7px' }}>
                        <Link style={{ color: '#36a0e1', textDecoration: 'none' }} onClick={() => handleSelectLanguage(index)} className="tdlinkchange">
                          Редактировать
                        </Link><br/>
                        <Link style={{ textDecoration: 'none', color: 'red' }} onClick={() => handleDeleteLanguage(index)} className="tdlinkchange">
                          Удалить
                        </Link>
                                            
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'countries':
        return <div className="countries add-user">
            <div className="languages">
                <div className="answer" style={{ marginRight: '20px' }}>
                    <h5 style={{ marginBottom: '30px' }}>Добавить новую страну</h5>
                    <div className="selectlang">
                    <div className="setlang">
                      <label>Название страны</label>
                        <input
                        type="text"
                        style={{ cursor: 'auto', width: '90%', borderRadius: '4px', backgroundColor: '#d1faffe0' }}
                        value={countryName}
                        onChange={(e) => setCountryName(e.target.value)}
                        />
                    </div>
                    
                    <button onClick={handleAddCountry} style={{ marginTop: '10px' }}>Добавить</button>
                    </div>
                </div>

                <div className="maintablelang">
                    <h3 style={{ marginLeft: '1rem', marginBottom: '10px' }}>Все страны</h3>
                    <table className="tablealllang" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#d1faffe0' }}>
                        <th>##</th>
                        <th style={{ textAlign: 'left', paddingLeft: '3rem' }}>Название</th>
                        <th style={{ textAlign: 'left' }}>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                      {countries.map((country, index) => (
                        <tr key={index} className="trsettin">
                          <td style={{ width: '5rem', padding: '7px' }}>{index + 1}</td>
                          <td className="questd" style={{ textAlign: 'left', width: '20rem', padding: '7px', paddingLeft: '3rem' }}>{country.name}</td>
                          <td style={{ textAlign: 'left', width: '5rem', padding: '7px', paddingLeft: '15px' }}>
                            <Link style={{ color: '#36a0e1', textDecoration: 'none' }} onClick={() => handleEditCountry(country.id)} className="tdlinkchange">
                              Редактировать
                            </Link><br/>
                            <Link style={{ textDecoration: 'none', color: 'red' }} onClick={() => handleDeleteCountry(country.id)} className="tdlinkchange">
                              Удалить
                            </Link>
                                                
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>;
      case 'currencies':
        return <div className="add-user">
            <div className="answer" style={{ marginRight: '20px' }}>
                <h4 style={{ marginBottom: '25px', fontSize: '1.1rem' }}>Добавить новую валюту</h4>
                <div className="selectlang">
                    <div className="setlang">
                      <label>Добавить новую валюту</label><br/>
                        <input
                            type="text"
                            style={{ cursor: 'auto', marginTop: '5px', background: '#d1faffe0', width: '90%' }}
                            value={currencyName}
                            onChange={(e) => setCurrencyName(e.target.value)}
                        />
                    </div>
                    
                    <div className="faqans">
                        <p style={{ marginBottom: '5px', marginTop: '2rem' }}>Добавить иконку</p>  
                        <div className="image-upload-container">
                            <label htmlFor="file-upload" className="custom-file-upload">
                              Загрузить
                            </label>
                            <input id="file-upload" style={{ display: 'none' }} type="file" accept="image/*" onChange={handleImageChange} />
                              {selectedImage && (
                                <div className="image-preview">
                                    <div>
                                      <img src={selectedImage} alt="" />
                                    </div>
                                    <button className="remove-button" onClick={handleImageRemove} style={{ width: '15rem', display: 'flex', justifyContent: 'space-between', color: 'black', marginTop: '14.5rem', background: '#d1faffe0' }}>Отменить <Close/></button>
                                </div>
                              )}
                        </div>
                    </div>
                    
                    <button onClick={handleAddCurrency} style={{ marginTop: '-2rem' }}>Добавить</button>
                </div>
            </div>

            <div className="maintablelang">
                <h3 style={{ marginLeft: '1rem' }}>Все валюты</h3>
                <table className="tablealllang" style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background: '#d1faffe0' }}>
                        <th>##</th>
                        <th style={{ textAlign: 'left', paddingLeft: '3rem' }}>Название</th>
                        <th style={{ textAlign: 'left' }}>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                      {currencies.map((currency, index) => (
                        <tr key={index} className="trsettin">
                          <td style={{ width: '5rem', padding: '7px' }}>{index + 1}</td>
                          <td className="questd" style={{ textAlign: 'left', width: '20rem', padding: '7px', paddingLeft: '3rem' }}>{currency.name}</td>
                          <td style={{ textAlign: 'left', width: '5rem', padding: '7px', paddingLeft: '15px' }}>
                            <Link style={{ color: '#36a0e1', textDecoration: 'none' }} onClick={() => handleEditCurrency(currency.id)} className="tdlinkchange">
                              Редактировать
                            </Link><br/>
                            <Link style={{ textDecoration: 'none', color: 'red' }} onClick={() => handleDeleteCurrency(currency.id)} className="tdlinkchange">
                              Удалить
                            </Link>
                                                
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
            </div> 
        </div>;
      case 'links':
        return <div className="add-user">
          <h3 style={{ marginBottom: '1rem' }}>Ссылки</h3>
            <div className="flexlink">
                <p>Сайт компании</p>
                <input />
            </div>
            <div className="flexlink">
                <p>Telegram - канал</p>
                <input />
            </div>
            <div className="flexlink">
                <p>Тех. поддержка</p>
                <input />
            </div>
            <button style={{ backgroundColor: '#65b7bc', textAlign: 'left' , width: '18rem', borderRadius: '5px', padding: '10px 1rem', fontSize: '1rem', border: 'none', color: 'white', marginTop: '1.5rem', cursor: 'pointer' }}>Сохранить</button>
        </div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container">
        <h3>Настройки</h3>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'languages' ? 'active' : ''}`}
            onClick={() => setActiveTab('languages')}
            
          >
            Языки
          </button>
          <button
            className={`tab ${activeTab === 'countries' ? 'active' : ''}`}
            onClick={() => setActiveTab('countries')}
          >
            Страны
          </button>
          <button
            className={`tab ${activeTab === 'currencies' ? 'active' : ''}`}
            onClick={() => setActiveTab('currencies')}
          >
            Валюты
          </button>
          <button
            className={`tab ${activeTab === 'links' ? 'active' : ''}`}
            onClick={() => setActiveTab('links')}
          >
            Ссылки
          </button>
        </div>
        <div className="settings">
          {renderSettings()}
        </div>
      </div>
    </>
  );
}

export default Settings11;
