import './Header.css'

const Numbers = (props) => {
    return (
        <div className='NumbersContainer'>
        <h3>{props.number}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>  
    );
}

export default Numbers;