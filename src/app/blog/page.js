import BlogCard from '../components/blogcard/blogcard'
import './blog.css'
import '../global.css'

export default function Blog() {
    return (
        <div className='blogPage'>
            <BlogCard title='What Writers Should Know! Part Ten: Marketing' image={ <img src='/images/blog11.png'
                alt='image'
                width={120}
                height={120}
            />
            }
                text='Hi SEers! Denise here with What Write Should Know! Part ten explores my least favorite thing, marketing. Over twenty years ago, I...' />
            <BlogCard title='Holding On' image={<img src='/images/blog22.png'
                alt='image'
                width={120}
                height={120}
            />} text='A heartbeat slowly fadingeyes filled with unsaid truthswarmth held in fragile handslove close yet slipping away time lingers in stillnesspain beneath the silencea gentle...' />
            <BlogCard title='Better me' image={<img src='/images/blog33.png'
                alt='image'
                width={120}
                height={120}
            />} text='“There is only one corner of the universe you can be certain of improving, and that’s your own self.” – Aldous Huxley My priority to see...' />
        </div>
    )
}
