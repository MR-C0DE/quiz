import './../styles/Image.css';
let Image = (props) =>{
    let description = props.description == null? "Description" : props.description;
    let img = 'panel ' + (props.isOpen ? props.panel:'');
    description = props.isOpen ? 'Ullistration':description;
  

    return (
        <div className="image">
            <div className={img}>
                <img src="" alt="" />
            </div>
            <div className='description'>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Image;