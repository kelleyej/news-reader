import { Link } from 'react-router-dom';
import './ArticleCard.css';

export default function ArticleCard({ title, image, description, publishedAt }) {

    return (
    <Link to={`/articles/${title}`}>
    <section className='article-styling'>
    {(!image) ? <div className='no-image'><p>No image available.</p></div> : <img src={image} />}
    <h2>{title}</h2>
    {(!description) ? <p>No description available for this article.</p> : <p>{description}</p>}
    <p>{(new Date(publishedAt)).toLocaleString()}</p>
</section>
</Link>
    )
   
}