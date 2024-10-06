import './profilecard.css'

export default function ProfileCard(props) {
    return (
        <div className='profile_card'>
            <div className='ProfileCardImage'>{props.image}</div>
            <input type='text' placeholder={props.name} className='input' readOnly />
            <input type='text' placeholder={props.surname} className='input' readOnly/>
            <input type='email'placeholder={props.email} className='input' readOnly/>
        </div>
    )
}
