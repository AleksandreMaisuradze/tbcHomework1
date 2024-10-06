import './main.css'
import Card from '../card/card.js'


export default function Main() {
    return (
        <main className='main'>
            <Card title='ყავის აპარატი SENCOR COFFEE MAKER SCE 3050SS'
                image={<img
                    src='/images/104449_1.jpg'
                    alt='image'
                    width={150}
                    height={150} />}
                description='შეთავაზებაშია:წყლის ავზის მოცულობაა 1.25 ლ,დამზადებული ყავის ჭიქის რაოდენობა 12,სიმძლავრე: 1000 ვტ.'
            />
            <Card title='ყავის აპარატი BEKO CFM 6350 COFFEE MAKER'
                image={<img src='/images/Untitled-13_lypo-mn.jpg' alt='iamge' width={150} height={150} />}
                description='ყავის აპარატის სიმძლავრე არის1000 W,  გამოიყენება დაფქვილი ყავა, წყლის კონტეინერის მოცულობაა 1.25 ლიტრი.'
            />
            <Card title='ყავის აპარატი KORKMAZ A862-01 AQUA COFFEE MAKER (700 W, 1.2 L)'
                image={<img src='/images/Untitled-13_812e-r6.jpg' alt='image' width={150} height={150} />}
                description=' KORKMAZ-ის პროდუქციის ხარისხი აღიარებულია ექსპერტების მიერ, გამოირჩევა ერგონომიული დიზაინით,  საუკეთესო ფასითა და მომხმარებელთა სანდოობით.' />
        </main>)
}
