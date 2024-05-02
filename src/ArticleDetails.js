import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './ArticleDetails.css';

export default function ArticleDetails({ allArticles }) {
    const [articleDetails, setArticleDetails] = useState([])

    const articleTitle = useParams().title
    useEffect(() => {
        getArticleDetails()
    }, [])

    function getArticleDetails() {
        const specificArticle = allArticles.filter(article => article.title === articleTitle)
        setArticleDetails(specificArticle)
    }
 
    if(articleDetails.length === 0){
        return (
            <p>Loading...</p> 
        )
    } else {
        return (
        <div className='details-container'>
           <Link to="/"><button>⬅</button></Link>
           <h2>{articleDetails[0].title}</h2>
            {(!articleDetails[0].urlToImage) ? <div className='no-image'><p>No image available.</p></div> : <img src={articleDetails[0].urlToImage} />}
            <p>{articleDetails[0].content}</p>
            <p>{articleDetails[0].publishedAt}</p> 
            <p>{articleDetails[0].source.name}</p>
        </div> 
    )
    }
    
}