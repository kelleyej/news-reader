import { Link } from 'react-router-dom';
import './ArticleCard.css';

export default function ArticleCard({ title, image, description, publishedAt }) {

    return (
    <Link to={`/articles/${title}`}>
    <section className='article-styling'>
    {(!image) ? <div className='no-image'><p>No image available.</p></div> : <img src={image} />}
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{publishedAt}</p>
</section>
</Link>
    )
   
}