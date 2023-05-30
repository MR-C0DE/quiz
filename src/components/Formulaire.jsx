import { useState } from 'react';
import Connexion from './Connexion';
import Enregistrement from './Enregistrement';
let Formulaire = (props) =>{
    const [formulaire, setState] = useState("connexion")
    let element = null;
    
    if(formulaire === 'enregistre'){
        element = <Enregistrement lien={formulaire} setLien={setState} />;
    }
    else{
        element = <Connexion processus={props} lien={formulaire} setLien={setState} />;
    }
    return (
        <div className="form">
            {element}
           
        </div>
    )
}

export default Formulaire;