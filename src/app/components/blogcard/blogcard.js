import './blogcard.css'


export default function BlogCard(props) {
  return (
    <div className='blogCard'>
        <h2 className='blog_title'>{props.title}</h2>
        <div className='blog_image' >{props.image}</div>
        <p className='blog_text'>{props.text}</p>
    </div>
  )
}
