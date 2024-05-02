import './Articles.css';

export default function Articles({ allArticles }) {
    const articleGrid = allArticles.map(article => {
       return (
        <section >
            <h2>{article.headline}</h2>
            <img src={article.image} />
            <p>{article.description}</p>
            <p>{article.data}</p>
        </section>
        
    ) 
    })

    return (
        <section className="article-container">
            {articleGrid}
        </section>
    )
    
}