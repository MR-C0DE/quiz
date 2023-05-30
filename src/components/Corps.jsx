import './../styles/Corps.css';
import SousCorps from './SousCorps';
import Menu from './Menu';
import Image from './Image';
import { useState } from 'react';

let Corps = (props) =>{
    const [image, setImage] = useState('moyen_age');
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="corps">
            <Menu />
            <SousCorps isOpen={isOpen} setIsOpen={setIsOpen} panel={image} setPanel={setImage} />
            <Image isOpen={isOpen} setIsOpen={setIsOpen} panel={image} setPanel={setImage} description="Alors commencez..." />
            
        </div>
    )
}

export default Corps;