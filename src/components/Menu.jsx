import './../styles/Menu.css';
let Menu = (props) =>{

    return (
        <div className="menu">

            <div className="titre">
                <h1>Quizz projet 01</h1>
            </div>

            <div className="menu-content">
                <ul>
                    <li><span>Menu A</span></li>
                    <li><span>Menu B</span></li>
                    <li><span>Menu C</span></li>
                    <li><span>Menu D</span></li>
                </ul>
            </div>

        </div>
    );
}

export default Menu;