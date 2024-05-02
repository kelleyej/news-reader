import './Articles.css';
import ArticleCard from './ArticleCard';

export default function Articles({ allArticles }) {
    const articleGrid = allArticles.map(article => {
       return (
            <ArticleCard
            id={Date.now()}
            title={article.title}
            image={article.urlToImage}
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