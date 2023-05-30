import { useState } from 'react';
import './../styles/Corps.css';
import Formulaire from './Formulaire';
import Questionnaire from './Questionnaire';
let SousCorps = (props) =>{
    const [element, setElement] = useState(null);
    let affiche = null;
   

        if(element === 'question'){ 
            affiche = <Questionnaire panel={props} processus={element} setProcessus={setElement}/> ;
        }else{
            affiche = <Formulaire isOpen={props} processus={element} setProcessus={setElement} />;
        }  
    return (
        <div className="sous-corps">
            {affiche}
        </div>
    )
}

export default SousCorps;