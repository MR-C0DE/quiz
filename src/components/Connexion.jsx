import './../styles/Connexion.css';
import utilisateur from './../data/utilisateurs';
import { useState } from 'react';

const e_mail = "mulajaandre@gmail.com";
const pwd = "00000";
let connectUser = (mail, pass) =>{
    let response = false;
    utilisateur.forEach(element => {
       
        if(element.email === mail){
            
            if(element.password === pass){
                
                response = true;
            }
            else{
                response = false;
            }
        }else{
            response = false;
        } 
    });
    
    return response;
}

let Connexion = (props) =>{

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const heure = (new Date().getHours());
    const salutation = heure >= 17 ? "Bonsoir": "Bonjour"; 

    const handleClick = (e) => {
        e.preventDefault();
        props.setLien(lien=>'enregistre');

    }
    

    const inputEmail = (e) => {
        e.preventDefault();
        setEmail(email => e.target.value);
    }

    const inputPassword = (e) => {
        e.preventDefault();
        setPassword(password => e.target.value);
    }

    const btn_handleClick = (e) =>{
        e.preventDefault();
        if(connectUser(email, password)){
            props.processus.setProcessus(processus => 'question');
            props.processus.isOpen.setIsOpen(true);
        }
        else{
            console.log(404);
        }
    }


    
    return (
        <div className="login">

            <div className='ecrito'>

                <h2>{salutation}, Bienvenue!</h2>

                <p>Connectez-vous avec vos données  que vous avez utilisé pour l'enregistrement ou <span onClick={handleClick}>Enregistrez-vous</span> </p>
               
            </div>

            <div className='formulaire' >
                
                <p><label>Adresse email</label></p>
                <input onInput={inputEmail} type="text" name="email" id="email" placeholder='Exemple@mail.com' />
                <p><label>Mot de passe</label></p>
                <input onInput={inputPassword} type="password" name="pass" id="pass" placeholder='Entrez votre code' />
                <p><button onClick={btn_handleClick}>Commencer maintenant</button></p>
                

            </div>
            
        </div>
    );
}

export default Connexion;