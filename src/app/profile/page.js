import ProfileCard from '../components/profilecard/profilecard'

export default function Profile() {
    return (
        <div>
            <ProfileCard image={<img src='/images/profileCard1.jpg' alt='image' width={200} height={200} />} name='Davit' surname='Zirakadze' email='davitzirakadze@gmail.com' />
        </div>
    )
}

