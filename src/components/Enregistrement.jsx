import { useState } from 'react';
import './../styles/Enregistrement.css';




let Enregistrement = (props) =>{
    const heure = (new Date().getHours());
    const salutation = heure >= 17 ? "Bonsoir": "Bonjour"; 

    const [pseudo, setPseudo] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    // Clique sur le bouton
    const handleClickBtn = (e) =>{
        e.preventDefault();
          
    }

    const handleClick = (e) => {
        e.preventDefault();
        props.setLien(lien=>'connecte');
    }

    const inputPseudo = (e) => {
        e.preventDefault();
        setPseudo(e.target.value);
    }

    const inputEmail = (e) => {
        e.preventDefault();
        setEmail(email => e.target.value);
    }

    const inputPassword = (e) => {
        e.preventDefault();
        setPassword(password => e.target.value);
    }


    return (
        <div className="signin">

            <div className='ecrito-sign'>

                <h2>{salutation}, Enregistrez-vous!</h2>

                <p>Enregistrez-vous afin d'avoir accès au quizz ou <span onClick={handleClick}>Connectez-vous</span> </p>

            </div>

            <div className='formulaire-sign'>
                <p><label>Pseudonyme</label></p>
                <input onChange={inputPseudo} type="text" name="pseudo" id="pseudo" placeholder='Mr_C0de' />
                <p><label>Adresse email</label></p>
                <input onChange={inputEmail} type="text" name="email" id="email" placeholder='Exemple@mail.com' />
                <p><label>Mot de passe</label></p>
                <input onChange={inputPassword} type="password" name="pass" id="pass" placeholder='Entrez votre code' />
                <p><label>Confirmation</label></p>
                <input type="password" name="confirm-pass" id="confirm-pass" placeholder='Re-entrez votre code' />
                <p><button onClick={handleClickBtn} >Enregistrer</button></p>
            </div>
            
        </div>
    );
}

export default Enregistrement;