import './../styles/Questionnaire.css';
import { useState } from 'react';

//source : https://socket.io/docs/v4/client-initialization/
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import { useEffect } from 'react';
const socket = new io();
let receptionQuestions = null;
function receive (message){
    receptionQuestions = message;  
}
//source : https://socket.io/docs/
socket.on('message', receive)

const Questionnaire = (props) => {


    const [questionRecu, setQuestionRecu] = useState(receptionQuestions);
    const [quiz, setQuiz] = useState(questionRecu[0]);
    const [reponse, setReponse] = useState(null);
    const [bonne, setBonne] = useState(0);
    const [soc, setSoc] = useState(null);
    let btn_temp = null;

    function send (){
        socket.emit('message', (quiz.id + 1));
    }

    function inputChan(e){
        e.preventDefault();
        setSoc(e.target.value);
        send();
    }

    const nextQuestion = (e) => {
        e.preventDefault();
        if(quiz.id < questionRecu.length - 1){

            
            setQuiz(questionRecu[quiz.id + 1]);
            send();
            props.panel.setPanel(questionRecu[quiz.id + 1].img);
            if(reponse === quiz.answers){
                setBonne(bonne + 1);
            }
            setReponse(null);
        }
        
    }

    const trueAnswer = (e) =>{
        e.preventDefault();
        setReponse(true);
        if(quiz.id === 4){
            btn_temp = (
                
            <div>
                <button onClick={nextQuestion} className='vrai'>Terminer</button>
            </div>
            );
        }
    }
    const falseAnswer = (e) =>{
        e.preventDefault();
        setReponse(false);

    }

    
  
    btn_temp = reponse === null ? (
                    <div>
                        <button onClick={trueAnswer} className='vrai'>Vrai</button>
                        <button onClick={falseAnswer} className='faux'>Faux</button>
                    </div>): (
                    <div>
                        <button onClick={nextQuestion} className='vrai'>Suivant</button>
                    </div>
    );

    if(quiz.id === 5){
        btn_temp = (
            
        <div>
            <button onClick={nextQuestion} className='vrai'>Terminer</button>
        </div>
        );
    }

    let afficheReponse = reponse == null ? '' : (reponse === quiz.answers?'Bonne réponse':'Mauvaise réponse');
    return (
        <div className="questionnaire">

            <div className="question">
                <h2>Question {quiz.id + 1}</h2>
                <p> 
                    {quiz.text} 
                </p>
                <p>Point Gagné : <strong>{bonne}</strong> <span>{afficheReponse}</span></p>
                {btn_temp}
            </div>
        </div>
    );

}

export default Questionnaire;