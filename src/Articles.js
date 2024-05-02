import './Articles.css';
import { Link } from 'react-router-dom';

export default function Articles({ allArticles }) {
    const articleGrid = allArticles.map(article => {
       return (
        <Link to='/articles/details'><section >
            <h2>{article.headline}</h2>
            <img src={article.image} />
            <p>{article.description}</p>
            <p>{article.data}</p>
        </section>
        </Link>
    ) 
    })

    return (
        <section className="article-container">
            {articleGrid}
        </section>
    )
    
}