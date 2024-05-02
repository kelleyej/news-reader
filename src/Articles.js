import './Articles.css';
import ArticleCard from './ArticleCard';

export default function Articles({ allArticles }) {
    const articleGrid = allArticles.map(article => {
       return (
            <ArticleCard
            image={article.urlToImage}
            title={article.title}
           description={article.description}
            publishedAt={article.publishedAt} 
           />
    ) 
    })

    return (
        <section className="article-container">
            {articleGrid}
        </section>
    )
    
}