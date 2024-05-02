import './Articles.css';
import ArticleCard from './ArticleCard';
import { useState } from 'react';

export default function Articles({ allArticles }) {
const [search, setSearch] = useState('')
const filteredArticles = allArticles.filter(article => article.title.toLowerCase().includes(search.toLowerCase()))
   
    const articleGrid = filteredArticles.map(article => {
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
        <div>
        <input type='text' value={search} placeholder='Search title by keyword' onChange={(event) => setSearch(event.target.value)}/>
        <section className="article-container">
            {articleGrid}
        </section> 
        </div>
       
    )
    
}