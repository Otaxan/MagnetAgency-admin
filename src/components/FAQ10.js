import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import edit from "../images/edit.png";
// import del from "../images/delete.png";

const FAQ = () => {
    useEffect(() =>{
        document.title = 'FAQ';
    }, []);
    const [questions, setQuestions] = useState([
        { text: 'Чем занимается наша сеть?', answer: '', isExpanded: false },
        { text: 'Каковы наши основные услуги?', answer: '', isExpanded: false },
        { text: 'Где находятся наши офисы?', answer: '', isExpanded: false },
        { text: 'Как связаться с нашей поддержкой?', answer: '', isExpanded: false },
    ]);

    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [questionText, setQuestionText] = useState('');
    const [answerText, setAnswerText] = useState('');

    const handleSelectQuestion = (index) => {
        setCurrentQuestion({ ...questions[index], index });
        setQuestionText(questions[index].text);
        setAnswerText(questions[index].answer);
    };

    const handleSaveQuestion = () => {
        if (currentQuestion !== null) {
            const updatedQuestions = questions.map((q, i) =>
                i === currentQuestion.index ? { ...q, text: questionText, answer: answerText } : q
            );
            setQuestions(updatedQuestions);
            setCurrentQuestion(null);
            setQuestionText('');
            setAnswerText('');
        } else {
            const newQuestion = { text: questionText, answer: answerText, isExpanded: false };
            setQuestions([...questions, newQuestion]);
            setQuestionText('');
            setAnswerText('');
        }
    };

    const handleDeleteQuestion = (index) => {
        setQuestions(questions.filter((_, i) => i !== index));
        if (currentQuestion && currentQuestion.index === index) {
            setCurrentQuestion(null);
            setQuestionText('');
            setAnswerText('');
        }
    };

    const toggleAnswer = (index) => {
        const updatedQuestions = questions.map((q, i) =>
            i === index ? { ...q, isExpanded: !q.isExpanded } : q
        );
        setQuestions(updatedQuestions);
    };

    return (
        <>
            <div className="container">
                <h3>FAQ</h3>
                <div className="add-user">
                    <h5>Добавить FAQ</h5>
                    <div className="answer" style={{ marginRight: '20px' }}>
                        <div className="anstoque">
                            <div className="faqans">
                                <label className="labelfaq">Вопрос</label><br />
                                <input
                                    type="text"
                                    value={questionText}
                                    onChange={(e) => setQuestionText(e.target.value)}
                                />
                            </div>
                            <div className="faqans">
                                <label className="labelfaq">Ответ</label><br />
                                <textarea
                                    value={answerText}
                                    placeholder="Введите ответ"
                                    onChange={(e) => setAnswerText(e.target.value)}
                                />
                            </div>
                            <button onClick={handleSaveQuestion}>Сохранить</button>
                        </div>
                    </div>
                    <h5 style={{ marginTop: '2rem', marginBottom: '-1rem' }}>Все FAQ</h5>
                    <div className="allquestions">
                        {/* <h2>Все вопросы</h2> */}
                        <table className="tableallques">
                            <thead>
                                <tr>
                                    <th style={{ textAlign: 'left' }}>##</th>
                                    <th style={{ textAlign: 'left', width: '20rem' }}>Вопрос</th>
                                    <th style={{ textAlign: 'left', width: '5rem' }}>Действия</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((question, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td className="questd">
                                          <p>{question.text}<button onClick={() => toggleAnswer(index)}>{question.isExpanded ? '-' : '+'}</button></p>
                                            
                                            {question.isExpanded && <div className="answerfaq">{question.answer}</div>}
                                        </td>
                                        <td style={{ textAlign: 'left', width: '5rem' }}>
                                            <Link style={{ color: '#36a0e1', textDecoration: 'none' }} onClick={() => handleSelectQuestion(index)} className="tdlinkchange">
                                                Редактировать
                                            </Link><br/>
                                            <Link style={{ textDecoration: 'none', color: 'red' }} onClick={() => handleDeleteQuestion(index)} className="tdlinkchange">
                                                Удалить
                                            </Link>
                                            
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ;
