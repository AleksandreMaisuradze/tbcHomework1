import './card.css'


export default function Card(props) {
    return (
        <div className='card'>
            <h2 className='title'>{props.title}</h2>
            <p className='description'>{props.description}</p>
            <div className='image' >{props.image}</div>
            <button className='button'>Add To Cart</button>
        </div>
    )
}
