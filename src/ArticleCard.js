import { Link } from 'react-router-dom';

export default function ArticleCard({ title, image, description, publishedAt, id }) {

    return (
    <Link to={`/articles/${title}`}>
    <section >
    <h2>{title}</h2>
    <img src={image} />
    <p>{description}</p>
    <p>{publishedAt}</p>
</section>
</Link>
    )
   
}